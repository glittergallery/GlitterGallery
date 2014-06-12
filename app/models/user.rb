class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :validatable
  has_many :identities
  has_many :projects
  has_many :comments

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
   
  
  before_save { |user| user.email = email.downcase }
  validates :username, presence: true
  # validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, 
  #            uniqueness: { case_sensitive: false}
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
