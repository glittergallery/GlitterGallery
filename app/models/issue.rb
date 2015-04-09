class Issue < ActiveRecord::Base
  before_save :set_sub_id

  # This is to avoid conflict with the :type attribute
  self.inheritance_column = nil

  belongs_to :user
  belongs_to :project

  validates_presence_of :title, :description, :user, :project, :type, :status
  validates_presence_of :sub_id, unless: :set_sub_id
  validates :sub_id, uniqueness: { scope: :project }

  # TODO: make a list of 5 most popular types of issues
  #       people can raise on design projects.
  #
  # TYPES
  # [0] - Bug
  # [1] - Improvement
  #
  # STATUSES
  # [0] - OPEN
  # [1] - CLOSED

  def self.type_keys
    { 0 => 'Bug', 1 => 'Improvement' }
  end

  def self.status_keys
    { 0 => 'OPEN', 1 => 'CLOSED' }
  end

  def friendly_text
    "Issue ##{id} of #{project.name}"
  end

  def status_text
    Issue.status_keys[status]
  end

  def type_text
    Issue.type_keys[type]
  end

  def show_url
    File.join(project.urlbase, 'issue', sub_id.to_s)
  end

  def self.find_from_project(project, sub_id)
    project.issues.find_by_sub_id(sub_id)
  end

  def set_sub_id
    return if sub_id
      sub_id = project.issues.count + 1
      update_attribute(:sub_id, sub_id)
  end
end
