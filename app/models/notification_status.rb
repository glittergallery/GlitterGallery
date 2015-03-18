class NotificationStatus < ActiveRecord::Base
  belongs_to :notification
  belongs_to :victim, class_name: 'User'
end
