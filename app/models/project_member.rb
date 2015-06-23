class ProjectMember < ActiveRecord::Base
  belongs_to :member_project, foreign_key: 'project_id', class_name: 'Project'
  belongs_to :member, foreign_key: 'member_id', class_name: 'User'
end
