class ProjectMember < ActiveRecord::Base
  belongs_to :member_project, foreign_key: 'gallery_id', class_name: 'Project'
  belongs_to :member, foreign_key: 'member_id', class_name: 'User'

  validates_uniqueness_of :member_id, scope: :gallery_id

  # used to add current user as owner when project is created
  def self.add_owner(project, user)
    find_or_create_by(member_id: user.id, gallery_id: project.id, role: 'owner')
  end
end
