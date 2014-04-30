class UsersController < ApplicationController

	def show
	  @user = User.find_by username: params[:username]
	  @email = @user.email 
	  @username = @user.username
	  @projects = @user.projects
	  # TODO - Similarly extract other user details,
	  #        and show them up in the view.
	end
	
end
