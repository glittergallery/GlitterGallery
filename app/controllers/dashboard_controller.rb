class DashboardController < ApplicationController
  before_filter :authenticate_user!

  def index
    @projects = User.find(1).projects
  end
end
