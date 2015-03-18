class ProjectFollower < ActiveRecord::Base
  belongs_to :followed_project, foreign_key: 'project_id', class_name: 'Project'
  belongs_to :follower, foreign_key: 'follower_id', class_name: 'User'
end
