class RelationshipsController < ApplicationController
  before_action :authenticate_user!
  before_action :identify_user

  def identify_user
    @user = User.find_by(username: params[:id])
    # Check for nil user
    render_404 if @user.nil?
  end

  def follow
    if current_user == @user
      respond_to do |format|
        format.js { render template: 'relationships/update_social' }
        format.html { redirect_to user_path(@user) }
      end
    else
      @user.followers << current_user
      @user.save!
      notify_users 'follow_user', 2, @user.id, [@user]
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
