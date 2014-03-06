class UsersController < ApplicationController

	def show
	  @user = User.find(params[:id])
	  @email = @user.email 
	  @username = @user.username
	  # TODO - Similarly extract other user details,
	  #        and show them up in the view.
	end
	
end
