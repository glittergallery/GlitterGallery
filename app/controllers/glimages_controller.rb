class GlimagesController < ApplicationController
  
  def create
    img = Glimage.new :file => params[:glimage][:file].original_filename
    project = Project.find(params[:glimage][:project_id])
    img.project_id = project.id
    if img.save
      image_commit project, params[:glimage][:file]
      create_thumbnail img
      flash[:notice] = 'Your image was saved! How sparkly!'
    else
      flash[:error] = "Something went wrong, your image didn't get saved - how sad."
    end
    redirect_to url_for(project)
  end

  def show
    @glimage = Glimage.find params[:id]
    logger.debug "Glimage: #{@glimage.inspect}"
    @comment = Comment.new
    @comment.glimage_id = params[:id]
    logger.debug "Comment: #{@comment.inspect}"
  end

end
