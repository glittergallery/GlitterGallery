class UserController < ApplicationController
  before_filter :authenticate_user!, :except => :show
  
  # Show user dashboard if current logged in user
  def index
    # initialize new image model for upload form
    @image = Image.new
    @user = current_user
  end

  def show

  end
end
