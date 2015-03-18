class RelationshipsController < ApplicationController
  before_action :authenticate_user!
  before_action :identify_user

  def identify_user
    @user = User.find_by(username: params[:id])
    # Check for nil user and user trying to follow/unfollow herself
    redirect_to user_path(@user) if @user.nil? || current_user == @user
  end

  def follow
    if @user.followers.include?(current_user)
      redirect_to user_path @user
    else
      @user.followers << current_user
      @user.save!
      @user.notify_on_follow(current_user)
      respond_to do |format|
        # TODO: it might be better to show flash messages on successful and
        # unsuccessful requests.
        format.js { render template: 'relationships/update_social' }
        format.html { redirect_to user_path(@user) }
      end
    end
  end

  def unfollow
    relation = Relationship.find_by(follower_id: current_user.id,
                                    following_id: @user.id
                                    )
    relation.destroy if relation
    respond_to do |format|
      format.js { render template: 'relationships/update_social' }
      format.html { redirect_to user_path(@user) }
    end
  end
end
