class RelationshipsController < ApplicationController
  before_action :authenticate_user!
  before_action :identify_user

  def identify_user
    @user = User.where(username: params[:username]).first
    # Check for nil user and user trying to follow/unfollow herself
    redirect_to '/' if @user.nil? || current_user == @user
  end

  def follow
    if @user.followers.include?(current_user)
      redirect_to '/'
    else
      @user.followers << current_user
      @user.save!
      @user.notify_on_follow(current_user)
      respond_to do |format|
        format.js { render template: 'relationships/update_social' }
      end
    end
  end

  def unfollow
    relation = Relationship.where(
      follower_id: current_user.id,
      following_id: @user.id
    ).first
    relation.destroy

    respond_to do |format|
      format.js { render template: 'relationships/update_social' }
    end
  end
end
