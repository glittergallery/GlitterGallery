class RelationshipsController < ApplicationController
	before_filter :authenticate_user!

	def follow
		@user = User.where(username: params[:username]).first
		if @user.nil? or current_user == @user or @user.followers.include?(current_user)
			redirect_to "/"
		else
			@user.followers << current_user
			@user.save!
			respond_to do |format|
				format.js { render template: "relationships/update_social" }
			end
      notify_users 3, 2, @user.id, [@user]
		end
	end

	def unfollow
		@user = User.where(username: params[:username]).first
		if not @user.nil? and current_user!=@user
			relation = Relationship.where(follower_id: current_user.id, following_id: @user.id).first
			relation.destroy
		end
		respond_to do |format|
			format.js { render template: "relationships/update_social" }
		end
	end
end
