class User < ActiveRecord::Base
  has_many :projects
  has_many :glimages, :through => :projects
   
  before_save :create_remember_token
  # before_save :normalize_identity_url

  attr_accessible :email, :identity_url
  validates_presence_of :identity_url

private
    def create_remember_token
      self.remember_token = SecureRandom.urlsafe_base64
    end

    def normalize_identity_url
      self.identity_url = URI.parse(self.identity_url).normalize
    end
end
