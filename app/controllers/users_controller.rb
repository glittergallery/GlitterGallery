class UsersController < ApplicationController
  before_filter :authenticate_user!, except: :show

  # GET /username
  def show
    @user = User.find_by username: params[:id]
    render_404 unless @user
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
