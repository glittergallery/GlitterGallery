class GlimagesController < ApplicationController
  
  def show
    @glimage = Glimage.find params[:id]
    logger.debug "Glimage: #{@glimage.inspect}"
    @comment = Comment.new
    @comment.glimage_id = params[:id]
    logger.debug "Comment: #{@comment.inspect}"
  end

end
