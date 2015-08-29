class SearchController < ApplicationController

  # GET /search
  def show
    if params[:id].present?
      @user = User.find_by username: params[:user_id]
      render_404 && return if @user.blank?
      @project = Project.with_deleted.find_by user_id: @user.id,
                                              name: params[:id]
    end

    if @project
      @images, @directories = Gg::Search.find_files(params[:search], @project)
      render 'project_show'
    else
      render 'show'
    end
  end
end
