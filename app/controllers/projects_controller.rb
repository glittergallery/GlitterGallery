class ProjectsController < ApplicationController
  before_filter :authenticate_user!, :except => :show

  def create
    repo = current_user.repo
    project = repo.projects.new :name => params[:project][:name]
    project.images.new :file => params[:project][:image][:file].original_filename 
    if project.save
      project_saved = true
      # make directory in repo
      project_dir = File.join repo.path, project.name
      begin
        unless File.exists? project_dir
          Dir.mkdir project_dir
        end
      rescue SystemCallError
        flash[:error] = "Unable to create project directory in repo, rolling back repo"
        project.delete
        project_saved = false
      else
        #write imagefile
        begin
          #write file and commit to repo
          imagefile = params[:project][:image][:file]
          image_commit project, imagefile
        rescue SystemCallError
          flash[:error] = "Unable to write image file to repo"
          project.images.delete
        end
      end
      if project_saved
        redirect_to url_for(project)
      else
        redirect_to dashboard_path
      end
    else
      @project = params[:project]
      flash[:error] = "Didn't save project!"
      redirect_to dashboard_path
    end
  end
  
  def show
    @project = Project.find params[:id]
  end
end
