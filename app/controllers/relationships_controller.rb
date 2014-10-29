class RelationshipsController < ApplicationController
	before_filter :authenticate_user!

	def follow
		@user = User.where(:username => params[:username]).first
		if not @user.nil? and current_user!=@user
			@user.followers << current_user
			@user.save!
		end
		respond_to do |format|
			format.js { render :template => "relationships/update_social" }
		end
	end

	def unfollow
		@user = User.where(:username => params[:username]).first
		if not @user.nil? and current_user!=@user
			relation = Relationship.where(:follower_id => current_user.id, :following_id => @user.id).first
			relation.destroy
		end
		respond_to do |format|
			format.js { render :template => "relationships/update_social" }
		end
	end
end
