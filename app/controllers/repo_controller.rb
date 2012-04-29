class RepoController < ApplicationController
  before_filter :authenticate_user!, :except => :show

  def index
    @user = current_user
    @project = Project.new
    @project.glimages.build
    @glimages = @user.repo.glimages
  end
end
