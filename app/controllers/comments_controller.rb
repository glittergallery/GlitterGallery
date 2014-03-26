# User interacts with comments throughout the application through 
# the methods defined in this controller. 

class CommentsController < ApplicationController
  before_filter :logged_in,  only: [:new, :create]

  def new
    @comment = Comment.new
  end

  # Helps create new comments. They have polycomment attributes (type, id)
  # that helps distinguish the nature of what these comments are for.

  def create
    @comment = Comment.new(params[:comment])
    @comment.user = current_user                      
    if @comment.save
      @comments = Comment.where(polycomment_type: params[:comment][:polycomment_type],
                              polycomment_id: params[:comment][:polycomment_id])
      @comments = @comments.paginate(page: 1, per_page: 10)
      respond_to do |format|
        format.html { redirect_to :back }
        format.js {}
      end
      #flash[:notice] = 'Your comment was posted!'
    else
      redirect_to :back
      flash[:alert] = 'Something went wrong, try reposting your comment.'
    end
  end

  def destroy
    @delete = Comment.find(params[:id])
    if @delete.user_id == current_user.id
      @delete.destroy
      redirect_to :back
    else
      flash[:alert] = "You can't delete this comment!"
      redirect_to :back
    end
  end

  private

    def logged_in
      redirect_to root_url unless !current_user.nil?
    end

end