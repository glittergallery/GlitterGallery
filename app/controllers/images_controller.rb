class ImagesController < ApplicationController
  
  def show
    @image = Image.find params[:id]
    @project = Project.find @image.project_id
    @repo = Repo.find @project.repo_id
    @user = User.find @repo.user_id
    reponame = @repo.path.split(File::SEPARATOR).pop
    @imagepath = File.join "repos", reponame, @project.name, @image.file
  end

end
