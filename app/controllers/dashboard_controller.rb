class DashboardController < ApplicationController
#  before_filter :authenticate_user!, :except => :show
#  CHECK - if there is any substitue necessary.

  def index
    @projects = current_user.projects
    unless @projects.count == 0
      @glimages = current_user.glimages
    else
      redirect_to new_project_path
    end
  end
end
