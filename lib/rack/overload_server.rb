# used to overload the service_rpc function. Read_body
# returns the useful bit. One can extract the commits
# and the branch name from there, which will be further
# used to update satellite folder and commits thumbnails

# TODO: Find a better way to achieve the same
require 'zlib'
require 'rack/request'
require 'rack/response'
require 'rack/utils'
require 'time'

require 'grack/git'

module Grack
  class Server
    attr_reader :git

     def service_rpc
      return render_no_access unless has_access?(@rpc, true)

      input = read_body
      # old commit SHA starts from the fourth position
      commits_sha = input[4, 120].split(' ')
      old_sha = commits_sha.first
      new_sha = commits_sha.second
      branch = commits_sha.third.split(/\W+/).last

      # take out username and project from path
      path = /^([\w\.\/-]+)\.git/.match(@req.path).to_a

      @res = Rack::Response.new
      @res.status = 200
      @res["Content-Type"] = "application/x-git-%s-result" % @rpc
      @res["Transfer-Encoding"] = "chunked"
      @res["Cache-Control"] = "no-cache"

      @res.finish do
        git.execute([@rpc, '--stateless-rpc', git.repo]) do |pipe|
          pipe.write(input)
          pipe.close_write

          while block = pipe.read(8192)     # 8KB at a time
            @res.write encode_chunk(block)  # stream it to the client
          end

          @res.write terminating_chunk
        end
        if @rpc == 'receive-pack'
          update_working_dir(path, branch)
          generate_images_between(old_sha, new_sha, branch)
        end
      end
    end

    # working dir or satellite folder needs to be in sync with bare repo
    # path is used to find the user and project
    # branch is used to get context of branch to sync
    def update_working_dir(path, branch)
      username_projectname = path.last
      ids = username_projectname.split('/')
      project_owner = User.find_by(username: ids.second.to_s.downcase)
      @project = Project.with_deleted.find_by user_id: project_owner.id,
                                              name: ids.last.to_s.downcase

      # update of username/project/satellite with rugged
      @sat_repo = @project.satelliterepo
      bare_remote = @project.satelliterepo.remotes['bare']
      # fetch from the bare remote
      bare_remote.fetch
      remote_branch = @sat_repo.branches["refs/remotes/bare/#{branch}"]
      local_branch = @sat_repo.branches["#{branch}"]
      local_branch = @sat_repo.create_branch "#{branch}" unless local_branch

      # checkout the branch, sync the refs and force checkout head to keep
      # working dir clean
      @sat_repo.checkout local_branch.name
      @sat_repo.references.update(@sat_repo.head.resolve, remote_branch.target_id)
      @sat_repo.checkout local_branch.name, strategy: :force
    end

    # find all the commits between old_sha and new_sha
    # pass each commit and parent pair to generate the thumbnail
    # pass the head after push for new inspire image if push branch is master
    def generate_images_between(old_sha, new_sha, branch)
      head = @sat_repo.lookup("#{new_sha}")
      tail = @sat_repo.lookup("#{old_sha}")
      walker = Rugged::Walker.new(@sat_repo)
      walker.push(head)
      walker.hide(tail)
      # find diff for each parent child pair
      walker.each do |commit|
        commit.parents.each do|p|
          generate_for('thumbnail', commit, p)
        end
      end
      generate_for('inspire', head, head.parents.first) if branch == 'master'
    end

    # generates thumnail and inspire images from the last diff delta path
    # parent has to be a commit and not an array
    def generate_for(type, child, parent)
      diff =  child.diff(parent)
      path = diff.deltas.last.new_file[:path]
      case type
      when 'thumbnail'
        @project.generate_thumbnail path, child.oid
      when 'inspire'
        @project.generate_inspire_image path
      end
    end
  end
end
