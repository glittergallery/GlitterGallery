class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :validatable
  has_many :identities
  has_many :projects
  has_many :comments
  has_many :notification_statuses
  has_many :notifications, :through => :notification_statuses
  has_many :project_followers, :foreign_key => "follower_id"
  has_many :followed_projects, :through => :project_followers, :source => :following, :foreign_key => "follower_id"

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
   
  
  before_save { |user| user.email = email.downcase }
  validates :username, presence: true, uniqueness: { case_sensitive: false }

  def applyomniauth(omniauth)           
    self.email = omniauth['info']['email'] if email.blank?
    self.username = omniauth['info']['nickname'] if username.blank?
    identities.build(:provider => omniauth['provider'], :uid => omniauth['uid'])
  end

  # This is a method within devise - we're overwriting it by saying that
  # we will require a password only if
  # A ) There are no linked identities
  #       OR
  # B ) There is a password already
  def password_required?
    (identities.empty? || !password.blank?) && super
  end
private   

    
end
