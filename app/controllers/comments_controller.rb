# User interacts with comments throughout the application through 
# the methods defined in this controller. 

class CommentsController < ApplicationController

  def new
    @comment = Comment.new
  end

  # Helps create new comments. They have polycomment attributes (type, id)
  # that helps distinguish the nature of what these comments are for.

  def create
    @comment = Comment.new :body  => params[:comment][:body],
                           :issue => false
    @comment.polycomment_type = params[:polycomment_type]
    @comment.polycomment_id = params[:polycomment_id]
    @comment.user_id = current_user.id                      
    respond_to do |format|
      @comments = Comment.where(polycomment_type: params[:polycomment_type],
                                polycomment_id: params[:polycomment_id])
      if @comment.save
        @comments << @comment
        @comments = @comments.paginate(page: 1, per_page: 10)
        format.html { redirect_to :back }
        #flash[:notice] = 'Your comment was posted!'
      else
        @comments = @comments.paginate(page: 1, per_page: 10)
        format.html {}
        flash[:alert] = 'Something went wrong, try reposting your comment.'
      end
      format.js {}
    end
  end

end