class ProjectFollower < ActiveRecord::Base
  belongs_to :followed_project, foreign_key: 'project_id', class_name: 'Project'
  belongs_to :follower, foreign_key: 'follower_id', class_name: 'User'
  after_create :notify

  # Returns true if user is following project, false otherwise.
  def self.following?(user, project)
    !find_by(follower: user, followed_project: project).nil?
  end

  # Makes user a follower of project.
  def self.make_follow(user, project)
    find_or_create_by(follower: user, followed_project: project)
  end

  # Makes user unfollow a project. Returns true if successful, false otherwise.
  def self.remove_follow(user, project)
    rel = find_by(follower: user, followed_project: project)
    return false unless rel
    !rel.destroy.nil?
  end

  # Create notification.
  def notify
    Notification.create(
      actor: follower,
      action: 1,
      object_type: 0,
      object_id: followed_project.id,
      victims: [followed_project.user]
    )
  end
end
