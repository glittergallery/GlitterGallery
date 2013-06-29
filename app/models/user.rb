class User < ActiveRecord::Base
  has_many :projects
  has_many :glimages, :through => :projects
 
  

  attr_accessible :email, :identity_url
  validates_presence_of :identity_url
end
