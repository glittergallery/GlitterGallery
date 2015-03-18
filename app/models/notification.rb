class Notification < ActiveRecord::Base
  belongs_to :actor, class_name: 'User'
  has_many :notification_statuses
  has_many :victims, through: :notification_statuses,
                     class_name: 'User',
                     foreign_key: 'victim_id'

  # This class has the following information -
  # Actor - the person responsible for the action
  # Action -
  # 0: Commented on Project,
  # 1: Followed Project,
  # 2: Forked,
  # 3: Followed User,
  # 4: Created Project,
  # 5: Commented on Issue
  #
  # Object_type [0: Project, 1: Comment, 2: User]
  # Object_id - ID of the object
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
    when 0, 5
      ' commented on '
    when 1, 3
      ' followed '
    when 2
      ' forked '
    when 4
      ' created '
    end
  end

  def objectname
    case action
    when 0
      return Project.find(Comment.find(object_id).polycomment_id).name
    when 5
      return Issue.find(Comment.find(object_id).polycomment_id).friendly_text
    when 3
      return User.find(object_id).username
    when 1, 2, 4
      return Project.find(object_id).name
    end
  end

  def url
    case action
    when 0 # TODO: link directly to a comment
      return Project.find(Comment.find(object_id).polycomment_id).urlbase
    when 5
      return Issue.find(Comment.find(object_id).polycomment_id).show_url
    when 1, 2, 4
      return Project.find(object_id).urlbase
    else
      return "/#{actor.username}"
    end
  end
end
