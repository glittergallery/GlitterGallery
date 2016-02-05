class CommentsController < ApplicationController
  before_filter :authenticate_user!
  before_action :get_context

  load_and_authorize_resource except: :index

  def index
    @comments = Comment.where(
      'polycomment_type = ? and polycomment_id = ? and id > ?',
      params[:polycomment_type],
      params[:polycomment_id],
      params[:after].to_i
    )
  end

  def new
    @comment = Comment.new
  end

  # polycomment attributes (type, id) to help
  # tell what the comments are for
  def create
    if polycomment_exists
      @comment = Comment.new comment_params
      @comment.user = current_user
      if @comment.save
        victims = @project.followers + [@project.user] - [@comment.user]
        notify_users @comment.action, @comment.id, victims, notification_url
        respond_to do |format|
          format.html { redirect_to :back }
          format.js {}
        end
      else
        redirect_to :back
        flash[:alert] = 'Something went wrong, try reposting your comment.'
      end
    else
      render status: 404
    end
  end

  def destroy
    @delete = Comment.find(params[:id])
    if @delete.destroy
      redirect_to :back
    else
      flash[:alert] = 'Something went wrong. Please retry after some time.'
      redirect_to :back
    end
  end

  private
  def comment_params
    params.require(:comment).permit(
      :polycomment_id,
      :polycomment_type,
      :issue,
      :body
    )
  end

  # to check if polycomment object exists or not
  def polycomment_exists
    if %w(blob commit tree).include?(params[:comment][:polycomment_type])
      return true
    else
      comment_class = [Project, Issue].find do |x|
        x.name == params[:comment][:polycomment_type].to_s.classify
      end
      value = "#{params[:comment][:polycomment_id]}"
      comment_class.where(id: value).any?
    end
  end
end
