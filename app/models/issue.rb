class Issue < ActiveRecord::Base
	self.inheritance_column = nil # This is to avoid conflict with the :type attribute
	belongs_to :user
	belongs_to :project

	validates_presence_of :title, :description, :user, :project, :type, :status

	# TODO - Think up a list of 5 most popular types of issues people can raise on design projects. 

	# TYPES
	# [0] - Bug
	# [1] - Improvement	

	# STATUSES
	# [0] - OPEN
	# [1] - CLOSED

	def self.type_keys
		return {0 => "Bug",1 => "Improvement"}
	end

	def self.status_keys
		return {0 => "OPEN",1 => "CLOSED"}
	end

	def status_text
		return Issue.status_keys[self.status]
	end
	def type_text
		return Issue.type_keys[self.type]
	end
end
