class User < ActiveRecord::Base
  has_many :projects
  has_many :glimages, :through => :projects
   
  before_save :create_remember_token

  attr_accessible :email, :identity_url
  validates_presence_of :identity_url

private
    def create_remember_token
      self.remember_token = SecureRandom.urlsafe_base64
    end
end
