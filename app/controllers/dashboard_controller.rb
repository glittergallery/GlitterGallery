class DashboardController < ApplicationController
#  before_filter :authenticate_user!, :except => :show

  def index
    @user = User.find(1)
    @projects = @user.projects
    if @projects.count > 0
      @glimages = @user.glimages
    else
      redirect_to new_project_path
    end
  end
end
