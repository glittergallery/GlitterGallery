class IssuesController < ApplicationController
  before_filter :authenticate_user!, except: [:show, :index]
  before_action :get_context
  before_action :set_issue, only: [:show, :reopen, :close]
  authorize_resource

  def index
    @issues = find_issue(params[:state])
    @issues = @issues.tagged_with(params[:tag]) if params[:tag]
  end

  def new
    @issue = Issue.new
  end

  def show
    @comments = Comment.where(
      polycomment_type: 'issue',
      polycomment_id: "#{@issue.id}"
    )
    @comment = Comment.new
  end

  def create
    @issue = Issue.new(issue_params)
    @issue.user = current_user
    @issue.project = @project
    @issue.status = 0
    respond_to do |format|
      if @issue.save
        @issue.tag_list.each do |tag|
          unless @project.tag_list.include?(tag)
            @project.tag_list.add(tag)
            @project.save
          end
        end
        victims = @project.followers + [@project.user] - [@issue.user]
        notify_users 'issue_create', 0, @issue.id, victims
        format.html { redirect_to @issue.show_url }
      else
        format.html { render 'new'}
      end
    end
  end

  # TODO: Needs a revisit after defining abilities
  # PUT /user/project/issues/1/close
  def close
    if @issue.close
      flash[:notice] = 'Issue Closed'
      redirect_to project_issues_path(@project)
    else
      flash[:notice] = 'Something went wrong. The issue was not closed'
      redirect_to issue_path(@issue)
    end
  end

  # PUT /user/project/issues/1/reopen
  def reopen
    if @issue.reopen
      flash[:notice] = 'Issue Reopened'
    else
      flash[:notice] = 'Something went wrong. The issue was not Reopened'
    end
    redirect_to issue_path @issue
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

  def set_issue
    @issue = @project.issues.find_by_sub_id(params[:id])
  end
end
