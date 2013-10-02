class UsersController < ApplicationController

	def show
	  @user = User.find(params[:id])
	  @email = @user.email 
	  @username = @user.username
	  # TODO - Similarly extract other user details,
	  #        and show them up in the view.
	end

	def new
	  @user = User.new
	end

	def create
	  @user = User.new(params[:user])
	  if @user.save
	  	login @user
	  	redirect_to dashboard_url
	  else
	  	render 'new'
	  end
	end

end
