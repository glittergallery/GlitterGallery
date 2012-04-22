class ApplicationController < ActionController::Base
  protect_from_forgery
private
  # Write a file and commit to the repo
  def image_commit(project, imagefile)
    if user_signed_in?
      # Get repo and index objects
      repo = Grit::Repo.new current_user.repo.path
      index = Grit::Index.new repo
      # Write file
      destfile = File.join current_user.repo.path, project.name, imagefile.original_filename
      File.open(destfile, "wb") {|f| f.write(imagefile.read)}
      # Commit
      index.add destfile, imagefile.read
      parent = repo.commits.count > 0 ? [repo.commits.first] : nil
      index.commit "new file #{project.name}/#{imagefile.original_filename}", parent
    end
  end

end
