class Notification < ActiveRecord::Base
	belongs_to :actor, :class_name => "User"
	has_many :notification_statuses
	has_many :victims, :through => :notification_statuses, :class_name => "User", :foreign_key => "victim_id"

	# This class has the following information - 
	# Actor - the person responsible for the action
	# Action - [0: Commented, 1: Followed, 2: Forked]
	# Object_type [0: Project, 1: Comment]
	# Object_id - ID of the object
	# Victims - the people to be notified 

	def messageverb
		if action == 0
			return " commented on "
			
		end		
	end

	def objectname
		if action == 0 
			comment = Comment.find(object_id)
			return Project.find(comment.polycomment_id).name
		end
	end
	
	def url
		if action == 0
			# TODO - It'd be better if we could link directly to a comment, using a hash in the url.			
			comment = Comment.find(object_id)
			return Project.find(comment.polycomment_id).urlbase
		end
	end

end
