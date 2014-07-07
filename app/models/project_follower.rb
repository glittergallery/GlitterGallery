class ProjectFollower < ActiveRecord::Base
	belongs_to :following, :class_name => "Project" 
	belongs_to :follower, :class_name => "User"
end
