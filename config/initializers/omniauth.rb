require 'omniauth/openid'
require 'openid/store/filesystem'
OmniAuth.config.logger = Rails.logger
OmniAuth.logger.progname = "omniauth"

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV["FACEBOOK_KEY"], ENV["FACEBOOK_SECRET"] if Glitter::Application.config.auth_methods.include?(:facebook)
  provider :twitter, ENV['TWITTER_KEY'],ENV['TWITTER_SECRET'] if Glitter::Application.config.auth_methods.include?(:twitter)
  provider :github, ENV['GITHUB_KEY'],ENV['GITHUB_SECRET'] if Glitter::Application.config.auth_methods.include?(:github)
  provider :linkedIn, ENV['LINKEDIN_KEY'],ENV['LINKEDIN_SECRET'] if Glitter::Application.config.auth_methods.include?(:linkedIn)
  provider :open_id, :store => OpenID::Store::Filesystem.new('/tmp') if Glitter::Application.config.auth_methods.include?(:open_id)
end