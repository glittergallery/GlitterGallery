class Issue < ActiveRecord::Base
  # This is to avoid conflict with the :type attribute
  self.inheritance_column = nil

  belongs_to :user
  belongs_to :project

  validates_presence_of :title, :description, :user, :project, :status
  acts_as_taggable 
  validate :tag_list_inclusion
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

  def tag_list_inclusion
    tag_list.each do |tag|
      errors.add(tag,"is not valid") unless %w(bug feature improvement)
        .include?(tag)
    end
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

  def show_url
    File.join(project.urlbase, 'issue', sub_id.to_s)
  end

  def sub_id
    (project.issue_ids.index(id) + 1).to_i
  end

  def self.find_from_project(project, sub_id)
    Issue.find(project.issue_ids[sub_id.to_i - 1])
  end
end
