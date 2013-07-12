class RepoController < ApplicationController
#  before_filter :authenticate_user!, :except => :show

  def index
    @user = current_user
    @projects = @user.repo.projects
    if @projects.count > 0
      @glimages = @user.repo.glimages
    else
      redirect_to new_project_path
    end
  end
end
