class HomeController < ApplicationController
  def index
    if logged_in?
      redirect_to dashboard_path
    else
      redirect_to new_user_session_path
    end
  end
end
