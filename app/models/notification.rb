class Notification < ActiveRecord::Base
	belongs_to :actor, :class_name => "User"
	has_many :notification_statuses
	has_many :victims, :through => :notification_statuses, :class_name => "User", :foreign_key => "victim_id"
end
