class Notification < ActiveRecord::Base
	belongs_to :actor, :class_name => "User"
	has_many :notification_statuses
	has_many :victims, :through => :notification_statuses, :class_name => "User", :foreign_key => "victim_id"

	# This class has the following information - 
	# Actor - the person responsible for the action
	# Action - [0: Commented on Project, 1: Followed Project, 2: Forked, 3: Followed User, 4: Created Project, 5: Commented on Issue]
	# Object_type [0: Project, 1: Comment, 2: User]
	# Object_id - ID of the object
	# Victims - the people to be notified 

	after_create :send_emails
	def send_emails
		for victim in self.victims
			NotifMailer.notif_email(self,victim).deliver
		end
	end

	def messageverb
		if action == 0 or action == 5
			return " commented on "
		elsif action == 1 or action == 3
			return " followed "
		elsif action == 2
			return " forked "
		elsif action == 4
			return " created "
		end
	end

	def objectname
		if action == 0 
			comment = Comment.find(object_id)
			return Project.find(comment.polycomment_id).name
		elsif action == 5
			comment = Comment.find(object_id)
			issue = Issue.find(comment.polycomment_id)
			return "Issue ##{issue.id} of #{issue.project.name}"
		elsif action == 3
			return User.find(object_id).username
		elsif action == 2 or action == 4
			return Project.find(object_id).name
		end
	end
	
	def url
		if action == 0
			# TODO - It'd be better if we could link directly to a comment, using a hash in the url.			
			comment = Comment.find(object_id)
			return Project.find(comment.polycomment_id).urlbase
		elsif action == 5
			comment = Comment.find(object_id)
			return Issue.find(comment.polycomment_id).show_url
		elsif action == 2 or action == 4
			return Project.find(object_id).urlbase
		else
			return "/#{actor.username}"
		end
	end

end
