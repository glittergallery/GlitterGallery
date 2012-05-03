class GlimagesController < ApplicationController
  
  def create
    project = Project.find(params[:glimage][:project_id])
    if params[:glimage][:file]
      img = Glimage.new :file => params[:glimage][:file].original_filename
      img.project_id = project.id
      if img.save
        image_commit project, params[:glimage][:file]
        create_thumbnail img
        flash[:notice] = 'Your image was saved! How sparkly!'
      else
        flash[:alert] = "Something went wrong, your image didn't get saved - how sad."
      end
    else
      flash[:alert] = "We were unable to save this image. :( There was a problem with the form. Please check that you filled it out correctly"
    end
    redirect_to url_for(project)
  end

  def show
    @glimage = Glimage.find params[:id]
    @comment = Comment.new
    @comment.glimage_id = params[:id]
  end

end
