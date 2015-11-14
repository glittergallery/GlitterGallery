class Notification < ActiveRecord::Base
  belongs_to :actor, class_name: 'User'
  has_many :notification_statuses
  has_many :victims, through: :notification_statuses,
                     class_name: 'User',
                     foreign_key: 'victim_id'

  validates :action, :actor, :model_id, presence: true

  # TODO: clean up action ids, numbers makes unreadable

  # This class has the following information -
  # Actor - the person responsible for the action
  # Action -
  # 0: Commented on Project,
  # 1: Followed Project,
  # 2: Forked,
  # 3: Followed User,
  # 4: Created Project,
  # 5: Commented on Issue
  # 6: Created Issue
  # 7: Commented on blob
  # 8: Commented on commit
  # 9: Commented on tree
  # 10: annotation
  #

  # model_id - ID of the object
  # Victims - the people to be notified

  after_create :send_emails

  def send_emails
    victims.each do |victim|
      NotifMailer.notif_email(self, victim).deliver
    end
  end

  handle_asynchronously :send_emails

  def messageverb
    case action
    when 0, 5, 7, 8, 9
      ' commented on '
    when 1, 3
      ' followed '
    when 2
      ' forked '
    when 4, 6
      ' created '
    when 10
      ' annotated '
    end
  end

  def objectname
    case action
    when 0
      find_project_name
    when 5
      find_issue_number
    when 7, 8, 9
      find_comment_oid
    when 10
      find_annotation_oid
    when 3
      return User.find(model_id).username
    when 1, 2, 4
      return Project.find(model_id).name
    when 6
      return Issue.find(model_id).friendly_text
    end
  end

  def redirect_url
    case action
    when 0, 7, 8, 9, 5, 10
      return url
    when 1, 2, 4
      return Project.find(model_id).urlbase
    when 6
      return Issue.find(model_id).show_url
    else
      return "/#{actor.username}"
    end
  end

  private

  def find_project_name
    Project.find(Comment.find(model_id).polycomment_id.to_i).name
  end

  def find_issue_number
    Issue.find(Comment.find(model_id).polycomment_id.to_i).friendly_text
  end

  def find_comment_oid
    comment = Comment.find(model_id)
    "#{comment.polycomment_type}: #{comment.polycomment_id[0..6]}"
  end

  def find_annotation_oid
    annotation = Annotation.find(model_id)
    "blob #{annotation.blob_id[0..6]}"
  end
end
