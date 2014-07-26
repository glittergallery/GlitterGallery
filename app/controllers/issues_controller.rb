class IssuesController < ApplicationController
  def index
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @issues = @project.issues
  end

  def new
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @issue = Issue.new
  end

  def show
    @issue = Issue.find params[:id]
    @comments = Comment.where(polycomment_type: "issue", polycomment_id: @issue.id)
    @comments = @comments.paginate(page: params[:page], per_page: 10)
    @comments = pg @comments, 10 
    @comment = Comment.new
    @ajax = params[:page].nil? || params[:page] == 1
  end

  def create
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    @issue = Issue.new(issue_params)
    @issue.user = current_user
    @issue.project = @project
    @issue.status = 0
    if @issue.save
      redirect_to(@project.urlbase)
    else
      flash[:alert] = "Couldn't create an issue"
      redirect_to(dashboard_path)
    end
  end

  def delete

  end
  private

  def issue_params
    params.require(:issue).permit(:title, :description, :type)
  end
end
