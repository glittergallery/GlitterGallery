class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :validatable, :rememberable
  has_many :identities
  has_many :projects
  has_many :comments
  has_many :notification_statuses
  has_many :notifications, through: :notification_statuses
  has_many :relationships, dependent: :destroy,
                           foreign_key: 'follower_id'
  has_many :reverse_relationships, dependent: :destroy,
                                   foreign_key: 'following_id',
                                   class_name: 'Relationship'
  has_many :followings, through: :relationships, source: :following
  has_many :followers, through: :reverse_relationships, source: :follower
  has_many :project_followers, dependent: :destroy, foreign_key: 'follower_id'
  has_many :followed_projects, through: :project_followers,
                               source: :followed_project
  has_many :issues

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  before_save { |user| user.email = email.downcase }
  validates :username, presence: true, uniqueness: { case_sensitive: false }

  def applyomniauth(omniauth)
    self.email = omniauth['info']['email'] if email.blank?
    self.username = omniauth['info']['nickname'] if username.blank?
    identities.build(provider: omniauth['provider'], uid: omniauth['uid'])
  end

  # We're using username in routes.
  def to_param
    username
  end

  # This is a method within devise - we're overwriting it by saying that
  # we will require a password only if
  # A ) There are no linked identities
  #       OR
  # B ) There is a password already
  def password_required?
    (identities.empty? || !password.blank?) && super
  end

  def follow?(user)
    relationships.find_by_following_id(user)
  end

  # Makes the user follow a project
  def follow_project(project)
    ProjectFollower.make_follow self, project
  end

  def notify_on_follow(user)
    @notification = Notification.create actor: user,
                                        action: 3, # Follow
                                        object_type: 2, # User
                                        object_id: id,
                                        victims: [self]
    @notification.save!
  end

  def git_author_params
    {
      email: email,
      name: username,
      time: Time.now
    }
  end
end
