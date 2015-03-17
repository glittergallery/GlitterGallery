class UsersController < ApplicationController

  # GET /username
	def show
	  @user = User.find_by username: params[:id]
	  redirect_to :root unless @user
	end
end
