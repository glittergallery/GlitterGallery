class CommentsController < ApplicationController

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new :body  => params[:comment][:body],
                           :issue => false

    @comment.polycomment_type = params[:polycomment_type]
    @comment.polycomment_id = params[:polycomment_id]
    @comment.user_id = current_user.id                      
    if @comment.save
      flash[:notice] = 'Your comment was posted!'
      redirect_to :back
    else
      flash[:alert] = 'Something went wrong, try reposting your comment.'
    end
  end

end