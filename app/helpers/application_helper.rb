require 'base64'

module ApplicationHelper

  # This is used to generate image tags based on raw data.
  # Currently used only when we are displaying history of images.
  # In the normal project#show - standard image linking is used.
  def data_image_tag(image, width, height)
    extension = image[:name].split('.').last
    if extension == 'svg'
      "<img src='data:image/svg+xml;utf8,
        #{image[:data]}' width='#{width}' height='#{height}'/>"
        .html_safe
    elsif extension == 'jpg'
      "<img src='data:image/jpg;base64,
        #{Base64.encode64(image[:data])}' width='#{width}' height='#{height}'/>"
        .html_safe
    elsif extension == 'png'
      "<img src='data:image/png;base64,
        #{Base64.encode64(image[:data])}' width='#{width}' height='#{height}'/>"
        .html_safe
    end
  end

  # Returns gravatar
  def avatar(email = nil)
    default = Rails.application.config.default_avatar
    if email.nil?
      tag :image, src: default
    else
      gravatar_id = Digest::MD5.hexdigest(email.downcase)
      gravatar_size = Rails.application.config.gravatar_size
      if Rails.env.development?
        gravatar_default = default
      else
        gravatar_default = root_url + default
      end
      tag :image, src: "http://gravatar.com/avatar/#{gravatar_id}.png?" +
                       "s=#{gravatar_size}&d=#{CGI.escape(gravatar_default)}"
    end
  end

  # sets class attribute of body tag
  def set_body_class
    log_status = user_signed_in? ? 'logged_in' : 'not_logged_in'
    "#{controller.controller_name} #{controller.action_name} #{log_status}"
  end
end
