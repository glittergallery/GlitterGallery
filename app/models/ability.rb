class Ability
	include CanCan::Ability

	def initialize(user)
		user ||= User.new

		#FIXME Need to improve with Fork and Branch functions
		can :update_image, Project do |project|
			project.try(:user_id) == user.id
		end

		can [:update, :delete], Comment do |comment|
			comment.try(:user_id) == user.id
		end
	
	end
end