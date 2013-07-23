class GlimagesController < ApplicationController
  #before_filter :authenticate_user!, :except => :show
  
  def create
    project = Project.find(params[:glimage][:project_id])
    if params[:glimage][:file]
      img = Glimage.new :file => params[:glimage][:file].original_filename, 
                         :private => params[:glimage][:private]
      img.project_id = project.id
      if img.save
        image_commit project, params[:glimage][:file]
        create_thumbnail img
        flash[:notice] = 'Your image was saved! How sparkly!'
      else
        flash[:alert] = "Something went wrong, your image didn't get saved - how sad."
      end
    else
      flash[:alert] = "We were unable to save this image. :( There was a problem with the form. 
                       Please check that you filled it out correctly"
    end
    redirect_to url_for(project)
  end

  def update
    glimage = Glimage.find params[:id]
    glimage.private = params[:glimage][:private]
    if glimage.save
      if params[:glimage][:file]
        project = Project.find glimage.project_id
        imagefile = params[:glimage][:file]
        message = "Updated #{glimage.file}"
        commit project.path, glimage.file, imagefile.read, message
        create_thumbnail glimage
      end
      flash[:notice] = "#{glimage.file} has been updated! Shiny!"
    else
      flash[:alert] = "Unable to update #{glimage.file}. The server ponies are sad."
    end
    redirect_to url_for(glimage)
  end

  def show
    @glimage = Glimage.find params[:id]
    @polycomment = @glimage
    @comments = @polycomment.comments
    @comment = Comment.new
  end

  def edit
    @glimage = Glimage.find params[:id]
    unless @glimage.belongs_to? current_user
      redirect_to dashboard_path
    end
  end

  def commits
  end

end
