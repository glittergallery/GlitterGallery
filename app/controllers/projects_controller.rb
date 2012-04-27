require 'RMagick'

class ProjectsController < ApplicationController
  include Magick

  before_filter :authenticate_user!, :except => :show

  def create
    logger.debug params.inspect.to_yaml
    repo = current_user.repo
    project = repo.projects.new :name => params[:project][:name]
    project.glimages.new :file => params[:project][:glimage][:file].original_filename, :filetype => params[:project][:glimage][:file].content_type
    if project.save
      add_the_magic # add magicmockup.js if needed
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
          imagefile = params[:project][:glimage][:file]
          image_commit project, imagefile
          create_thumbnail project.glimages[0]
        rescue SystemCallError
          flash[:error] = "Unable to write image file to repo"
          project.glimages.delete
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

  private

  
  def create_thumbnail(image)
    # # construct geometry
    geo = Rails.application.config.thumbnail_width
    if Rails.application.config.thumbnail_height
      geo += "x#{Rails.application.config.thumbnail_height}"
    end
    # read
    #img = Image.read(image.filepath)[0]
    #resize
    # thumb = img.change_geometry(geo) { |cols, rows| img.thumbnail cols, rows }
    #write
    # thumbfile = image.thumbnail('filepath')
    # thumb.write(thumbfile)
    cmd = "convert #{image.filepath} -resize #{geo} #{image.thumbnail('filepath')}"
    output = `#{cmd}`
    logger.debug "output #{output}"
    logger.debug "result #{$?.success?}"
  end

end
