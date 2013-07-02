class CommentsController < ApplicationController
  def create
    comment = Comment.new :user_id => current_user.id, 
                          :body => params[:comment][:body],
                          :issue => false
    # FIXME - comments could be part of anything.
    #comment.glimage_id = params[:comment][:glimage_id]
    if comment.save
      flash[:notice] = 'Your comment was posted!'
    else
      flash[:alert] = 'Something went wrong, try reposting your comment.'
    end
    # FIXME - comments could belong to anything.
    #img = Glimage.find(comment.glimage_id)
    #redirect_to url_for(img)
  end
end
