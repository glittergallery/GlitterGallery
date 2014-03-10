class User < ActiveRecord::Base
  has_many :projects
  has_many :glimages, :through => :projects
  has_many :comments

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
   
  
  before_save { |user| user.email = email.downcase 
                       user.identity_url = identity_url.downcase }
  # before_save :normalize_identity_url

  attr_accessible :email, :identity_url, :username

  validates :username, presence: true
  validates :identity_url, presence: true, uniqueness: { case_sensitive: false }
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, 
             uniqueness: { case_sensitive: false}

private
    

    def normalize_identity_url
      self.identity_url = URI.parse(self.identity_url)
    end
end
