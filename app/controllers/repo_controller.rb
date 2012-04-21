class RepoController < ApplicationController
  before_filter :authenticate_user!, :except => :show

  def index
    @user = current_user
    @project = Project.new
    @project.images.build
  end
end
