class ApplicationController < ActionController::Base
  protect_from_forgery

  private
  # Write a file and commit to the repo
  def image_commit(project, imagefile)
    if user_signed_in?
      destfile = File.join project.name, imagefile.original_filename
      commit current_user.repo.path, destfile, imagefile.read, "new file #{project.name}/#{imagefile.original_filename}" 
    end
  end

  # Add magicmockup to user's repo
  def add_the_magic
    if user_signed_in? and not File.exists? File.join(current_user.repo.path, "magicmockup.js")
      magicfile = File.join 'app', 'assets', 'javascripts', 'magicmockup.js'
      magic = File.open(magicfile).read
      commit current_user.repo.path, "magicmockup.js", magic, "Add magickmockup.js"
    end
  end

  def commit(repopath, file, contents, message)
    # set up repo and index
    repo = Grit::Repo.new repopath
    index = Grit::Index.new repo
    # write file to repo
    fullpath = File.join repopath, file
    File.open(fullpath, 'wb') {|f| f.write contents}
    # commit file
    index.add fullpath, contents
    parent = repo.commits.count > 0 ? [repo.commits.first] : nil
    index.commit message, parent
  end

end
