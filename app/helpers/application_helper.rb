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

  # No longer needed. 

  def project_for(glimage, link = true)
    p = Project.find(glimage.project_id)
    if link
      content_tag :a, p.name, :href => url_for(p)
    else
      p.name
    end
  end

  def user_for(obj, link = true)
    if obj.class == Glimage
      p = Project.find(obj.project_id)
    elsif obj.class == Project
      p = obj
    else
      return false
    end
    
    User.find(p.user_id).email

    #TODO - implement link when public user profiles have landed

  end

end
