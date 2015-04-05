class IssuesController < ApplicationController
  before_action :get_context

  def get_context
    @user = User.find_by username: params[:user_id]
    @project = Project.find_by user_id: @user.id, name: params[:id]
  end

  def index
    @issuestoshow = find_issue(params[:state])
    if params[:tag]
      @activetab = nil
      @issuestoshow = @project.issues.tagged_with(params[:tag])
    end
  end

  def new
    @issue = Issue.new
  end

  def show
    @issue = Issue.find_from_project(@project, params[:sub_id])
    @comments = Comment.where(
      polycomment_type: 'issue',
      polycomment_id: @issue.id
    )
    @comments = @comments.paginate(page: params[:page], per_page: 10)
    @comments = pg @comments, 10
    @comment = Comment.new
    @ajax = params[:page].nil? || params[:page] == 1
  end

  def create
    @issue = Issue.new(issue_params)
    @issue.user = current_user
    @issue.project = @project
    @issue.status = 0
    respond_to do |format|
      if @issue.save
        format.html { redirect_to @issue.show_url }
      else
        format.html { render "new" }
      end
    end
  end

  def close
    @issue = Issue.find_from_project(@project, params[:sub_id])
    if (current_user == @project.user) || (current_user == @issue.user)
      @issue.status = 1
      @issue.save
      flash[:notice] = 'Issue Closed'
      redirect_to(@project.issues_url)
    else
      flash[:alert] = "You don't have permission to close this issue"
      redirect_to(@project.issues_url)
    end

  end

  private

  def issue_params
    params.require(:issue).permit(:title, :description, :tag_list)
  end

  def find_issue(type)
    if type == 'closed'
      @activetab = 1
      @project.issues.where(status: 1)
    else
      @activetab = 0
      @project.issues.where(status: 0)
    end
  end
end
