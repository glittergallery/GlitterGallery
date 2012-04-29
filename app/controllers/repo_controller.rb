class RepoController < ApplicationController
  before_filter :authenticate_user!, :except => :show

  def index
    @user = current_user
    @project = Project.new
    @project.glimages.build
    @projects = Project.find_all_by_repo_id(@user.repo.id)
  end
end
