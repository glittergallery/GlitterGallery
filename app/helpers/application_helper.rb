module ApplicationHelper

  # Returns gravatar for a user based on his/her email id.
  # We're currently using it for commits, glitterposts, projects
  # and everywhere we need to indicate some activity from a given user.

  def avatar(email = nil)
    default = Rails.application.config.default_avatar
    if email.nil?
      tag :image, :src => default
    else
      gravatar_id = Digest::MD5.hexdigest(email.downcase)
      gravatar_size = Rails.application.config.gravatar_size
      tag :image, :src => "http://gravatar.com/avatar/#{gravatar_id}.png?s=#{gravatar_size}&d=#{CGI.escape(root_url + default)}"
    end
  end



end
