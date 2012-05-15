class HomeController < ApplicationController
  def index
    # Find all public images
    @glimages = Glimage.where("private is not ?", true).order('updated_at DESC').page(params[:page]).per_page(4)

    # if user_signed_in?
    #   redirect_to dashboard_path
    # else
    #   redirect_to new_user_session_path
    # end
  end
end
