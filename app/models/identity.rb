class Identity < ActiveRecord::Base
  belongs_to :user
  validates_presence_of :uid, :provider
  validates_uniqueness_of :uid, scope: :provider

  def self.allowedmethods
    Glitter::Application.config.auth_methods
  end

  def self.from_omniauth(omniauth)
    where(
      provider: omniauth['provider'],
      uid: omniauth['uid']
    ).first
  end
end
