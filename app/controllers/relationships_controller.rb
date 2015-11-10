class RelationshipsController < ApplicationController
  before_action :authenticate_user!
  before_action :identify_user


  def follow
    respond_err("You can't follow yourself") && return if current_user == @user
    @user.followers << current_user
    if @user.save!
      notify_users 'follow_user', @user.id, [@user]
      respond_social
    else
      respond_err('Something went wrong. Please reload and try again')
    end
  end

  def unfollow
    relation = Relationship.find_by(follower_id: current_user.id,
                                    following_id: @user.id
                                    )
    if relation.destroy
      respond_social
    else
      respond_err('Something went wrong. Please reload and try again')
    end
  end

  private
  def identify_user
    @user = User.find_by(username: params[:id])
    render_404 if @user.nil? # Check for nil user
  end

  def respond_social
    respond_to do |format|
      format.js { render template: 'relationships/update_social' }
      format.html { redirect_to user_path(@user) }
    end
  end

  def respond_err(error)
    respond_to do |format|
      format.js { render js: error, status: :unprocessable_entity }
      flash[:notice] = error
      format.html { redirect_to user_path(@user) }
    end
  end
end
