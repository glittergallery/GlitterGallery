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
  # many to many relationship between projects and project's followers
  has_many :project_followers, dependent: :destroy, foreign_key: 'follower_id'
  has_many :followed_projects, through: :project_followers,
                               source: :followed_project
  # many to many relationship between projects and project's members
  has_many :project_members, dependent: :destroy, foreign_key: 'member_id'
  has_many :member_projects, through: :project_members,
                             source: :member_project
  has_many :issues
  # authorization of ssh access
  has_many :keys

  has_many :annotations

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  before_save { |user| user.email = email.downcase }
  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validates_format_of :username, with: /\A[a-z0-9\-_]+\z/i, message: 'can ' +
    'only have dash, underscore and alphanumeric characters'

  ratyrate_rater

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

  def git_author_params
    {
      email: email,
      name: username,
      time: Time.now
    }
  end

  # checks if the user if the owner of the passed project
  def owner?(project)
    if id == project.user.id
      true
    else
      false
    end
  end

  # finds the users on basis of username. used on project's
  # setting page for searching and adding members to the project
  def self.search(search)
    if search
      where(['username LIKE ?', "%#{search}%"])
    else
      all
    end
  end
end
