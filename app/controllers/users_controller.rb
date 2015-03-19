class UsersController < ApplicationController

  # GET /username
  def show
    @user = User.find_by username: params[:id]
    redirect_to :root unless @user
  end

  def list_followers
    @user = User.where(username: params[:id]).first
    @followers = @user.followers
  end

  def list_followings
    @user = User.where(username: params[:id]).first
    @followings = @user.followings
  end
end
