module ApplicationHelper
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

  def project_for(glimage, link = true)
    p = Project.find(glimage.project_id)
    if link
      content_tag :a, p.name, :href => url_for(p)
    else
      p.name
    end
  end

end
