class User < ActiveRecord::Base
  has_many :projects 
  has_many :glimages, :through => :projects
  has_many :glitterposts


  devise :registerable, :recoverable, :rememberable,
         :trackable, :devise_openid_authenticatable

  attr_accessible :email, :password, :password_confirmation, :remember_me


end
