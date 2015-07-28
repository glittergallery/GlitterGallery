# used to sync satellite and bare repo after push
# triggerd by api call from post-recieve
module Gg
  class Sync

    attr_reader :changes, :repo_path

    def initialize(repo_path, changes)
      @repo_path = repo_path
      @changes = changes
    end

    def sync_satellite
      refs = @changes.split(' ')
      branch = refs.last.split('/').last
      update_working_dir(@repo_path, branch)
      old_sha = refs.first
      new_sha = refs.second
      generate_images_between(old_sha, new_sha, branch)
    end

    # working dir or satellite folder needs to be in sync with bare repo
    # path is used to find the user and project
    # branch is used to get context of branch to sync
    def update_working_dir(path, branch)
      # path is of form username/project_name
      ids = path.split('/')
      project_owner = User.find_by(username: ids.first.to_s.downcase)
      @project = Project.with_deleted.find_by user_id: project_owner.id,
                                              name: ids.last.to_s.downcase

      # update of username/project/satellite with rugged
      @sat_repo = @project.satelliterepo
      bare_remote = @project.satelliterepo.remotes['bare']
      bare_remote = @sat_repo.remotes.create 'bare', @project.barerepo.path unless bare_remote
      # fetch from the bare remote
      bare_remote.fetch
      remote_branch = @sat_repo.branches["refs/remotes/bare/#{branch}"]
      local_branch = @sat_repo.branches["#{branch}"]
      local_branch = @sat_repo
        .create_branch("#{branch}", "remotes/bare/#{branch}") unless local_branch

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
      # tails won't exist if previously repo was empty
      tail = @sat_repo.lookup("#{old_sha}") unless old_sha[0..5] == '000000'
      walker = Rugged::Walker.new(@sat_repo)
      walker.push(head)
      walker.hide(tail) unless old_sha[0..5] == '000000'
      # find diff for each parent child pair
      walker.each do |commit|
        # very first commit has no parent
        if commit.parents.empty?
          generate_for('thumbnail', commit, nil)
        else
          commit.parents.each do|p|
            generate_for('thumbnail', commit, p)
          end
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
