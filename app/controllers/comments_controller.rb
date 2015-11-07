class CommentsController < ApplicationController
  before_filter :authenticate_user!
  before_action :get_context

  load_and_authorize_resource

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
        @comments = find_project_comments
        victims = @project.followers + [@project.user] - [@comment.user]
        notify_users @comment.action, 1, @comment.id, victims, notification_url
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
      polycomment = params[:comment][:polycomment_type]
      value = "#{params[:comment][:polycomment_id]}"
      polycomment.classify.constantize.where(id: value).any?
    end
  end

  # return all the comments associated with polycomment object
  def find_project_comments
    @comments = Comment.where(
      polycomment_type: params[:comment][:polycomment_type],
      polycomment_id: "#{params[:comment][:polycomment_id]}"
    )
  end

  # if url has master in it then replace it with repo head
  # and append comment id to url
  def notification_url
    comment_url = "#{params[:url]}#comment_#{@comment.id}"
    match_data = comment_url.match /((blob|tree)\/master)/
    return comment_url unless match_data
    replace_str = "#{match_data[2]}/#{@project.barerepo.head.target.oid}"
    comment_url.gsub /((blob|tree)\/master)/, replace_str
  end
end
