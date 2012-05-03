class CommentsController < ApplicationController
  def create
    comment = Comment.new :author => params[:comment][:author], 
                          :email => params[:comment][:email].strip,
                          :body => params[:comment][:body]
    comment.glimage_id = params[:comment][:glimage_id]
    if comment.save
      flash[:notice] = 'Your comment was posted!'
    else
      flash[:alert] = 'Something went wrong, try reposting your comment.'
    end
    img = Glimage.find(comment.glimage_id)
    redirect_to url_for(img)
  end
end
