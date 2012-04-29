class RepoController < ApplicationController
  before_filter :authenticate_user!, :except => :show

  def index
    @user = current_user
    @projects = @user.repo.projects
    @glimages = @user.repo.glimages
  end
end
