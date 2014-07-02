class CommentsController < ApplicationController
  before_filter :logged_in,  only: [:new, :create]

  def new
    @comment = Comment.new
  end

  # polycomment attributes (type, id) to help
  # tell what the comments are for

  def create
    @comment = Comment.new comment_params
    @comment.user = current_user                      
    if @comment.save
      @comments = Comment.where(polycomment_type: params[:comment][:polycomment_type],
                              polycomment_id: params[:comment][:polycomment_id])
      @comments = @comments.paginate(page: 1, per_page: 10)
      
      if params[:comment][:polycomment_type] == 'project'
        project = Project.find(params[:comment][:polycomment_id])
        unless project.user == current_user
          Notification.create(
            :actor => current_user,
            :action => 0, #Commented
            :object_type => 1, # Comment
            :object_id => @comment.id,
            :victims => [project.user]
          )
        end
      end      

      respond_to do |format|
        format.html { redirect_to :back }
        format.js {}
      end            
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

    def comment_params
      params.require(:comment).permit(:polycomment_id,:polycomment_type,:issue,:body)
    end

end