class SearchController < ApplicationController

  # GET /user/project/search
  def project_search
    if params[:project_id].present?
      get_context
    else
      @user = User.find_by username: params[:user_id]
      render_404 && return if @user.blank?
      @project = Project.with_deleted.find_by user_id: @user.id,
                                              name: params[:id]
    end

    @images, @directories = Gg::Search.find_files(params[:search], @project)
    @issues = Issue.search(params[:search]).where(project_id: @project.id)
    render 'project_show'
  end

  # GET /search
  def website_search
    @projects = Project.search(params[:search]).where(private: false)
      .paginate(page: params[:page], per_page: 9)
    render 'website_show'
  end
end
