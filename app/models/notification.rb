class Notification < ActiveRecord::Base
  belongs_to :actor, class_name: 'User'
  has_many :notification_statuses
  has_many :victims, through: :notification_statuses,
                     class_name: 'User',
                     foreign_key: 'victim_id'

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
    when 0, 5, 7, 8, 9
      ' commented on '
    when 1, 3
      ' followed '
    when 2
      ' forked '
    when 4, 6
      ' created '
    end
  end

  def objectname
    case action
    when 0
      return Project.find(Comment.find(object_id).polycomment_id.to_i).name
    when 5
      return Issue.find(Comment.find(object_id).polycomment_id.to_i)
        .friendly_text
    when 7
      return "blob #{Comment.find(object_id).polycomment_id[0..6]}"
    when 8
      return "commit #{Comment.find(object_id).polycomment_id[0..6]}"
    when 9
      return "tree #{Comment.find(object_id).polycomment_id[0..6]}"
    when 3
      return User.find(object_id).username
    when 1, 2, 4
      return Project.find(object_id).name
    when 6
      return Issue.find(object_id).friendly_text
    end
  end

  def redirect_url
    case action
    when 0 # TODO: link directly to a comment
      return Project.find(Comment.find(object_id).polycomment_id.to_i).urlbase
    when 5
      return Issue.find(Comment.find(object_id).polycomment_id.to_i).show_url
    when 7, 8, 9
      return url
    when 1, 2, 4
      return Project.find(object_id).urlbase
    when 6
      return Issue.find(object_id).show_url
    else
      return "/#{actor.username}"
    end
  end
end
