class UsersController < ApplicationController

	def show
	  @user = User.find_by username: params[:username]
	  @email = @user.email 
	  @username = @user.username
	  @projects = @user.projects
	end

	def list_projects
		@user = User.find_by username: params[:username]
	end

	def list_followed_projects
		@user = User.find_by username: params[:username]
		@followedprojects = @user.followed_projects
	end

	
end
