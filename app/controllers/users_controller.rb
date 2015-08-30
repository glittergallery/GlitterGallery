class UsersController < ApplicationController
  before_filter :authenticate_user!, except: [:show, :show_projects]

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

  def show_projects
    @user = User.find_by username: params[:id]
    if @user == current_user
      @projects = @user.projects.paginate(page: params[:page], per_page: 9)
    else
      @projects = @user.projects.where('private = ?', false)
        .paginate(page: params[:page], per_page: 9)
    end
  end
end
