class DashboardController < ApplicationController
#  before_filter :authenticate_user!, :except => :show

  def index
    @projects = current_user.projects
    if @projects.count > 0
      @glimages = current_user.glimages
    else
      redirect_to new_project_path
    end
  end
end
