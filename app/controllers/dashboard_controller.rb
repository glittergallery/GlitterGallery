# This controller defines interactions with the user's dashboard.
# New methods should be added to this controller as the application
# becomes more powerful.

class DashboardController < ApplicationController

  def index
    @projects = current_user.projects
    unless @projects.count == 0
      #@glimages = current_user.glimages
    else
      redirect_to new_project_path
    end
  end
end
