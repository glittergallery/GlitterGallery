class SearchController < ApplicationController

  # GET /user/project/search
  def project_search
    get_context
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
