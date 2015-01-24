class UsersController < ApplicationController

	def show
	  @user = User.find_by username: params[:username]
	  @email = @user.email
	  @projects = @user.projects
		@followers = @user.followers
		@followings = @user.followings
	end

	def list_projects
		@user = User.find_by username: params[:username]
	end

	def list_followed_projects
		@user = User.find_by username: params[:username]
		@followedprojects = @user.followed_projects
	end
end
