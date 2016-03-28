class ProjectMember < ActiveRecord::Base
  belongs_to :member_project, foreign_key: 'gallery_id', class_name: 'Project'
  belongs_to :member, foreign_key: 'member_id', class_name: 'User'

  validates_uniqueness_of :member_id, scope: :gallery_id
  roles = %w(owner collaborator reporter)
  validates_inclusion_of :role, in: roles
  # used to add current user as owner when project is created
  def self.add_owner(project, user)
    find_or_create_by(member_id: user.id, gallery_id: project.id, role: 'owner')
  end

  # finds the project_member object and return true if user is
  # owner or collaborator or else returns false
  def self.write_acess(project, user)
    pm = find_by(member_id: user.id, gallery_id: project.id)
    return false if pm.nil?
    return false unless pm.role == 'collaborator' || pm.role == 'owner'
    true
  end

  # returns true if relation between user and projects exists
  def self.member?(project, user)
    return false unless user
    pm = find_by(member_id: user.id, gallery_id: project.id)
    return true unless pm.nil?
    false
  end
end
