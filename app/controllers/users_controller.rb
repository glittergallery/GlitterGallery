class UsersController < ApplicationController

	def show
	  @user = User.find_by username: params[:username]
	  unless @user 
	  	redirect_to :root
	  end
	end

	def list_projects
		@user = User.find_by username: params[:username]
	end

	def list_followed_projects
		@user = User.find_by username: params[:username]
		@followedprojects = @user.followed_projects
	end

	
end
