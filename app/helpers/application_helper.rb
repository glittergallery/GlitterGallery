require 'base64'

module ApplicationHelper

  # This is used to generate image tags based on raw data.
  # Currently used only when we are displaying history of images.
  # In the normal project#show - standard image linking is used.
  def data_image_tag(image, width, height, id_name = nil)
    "<img id='#{id_name}' src='#{data_image_path(image)}'
      width='#{width}' height='#{height}'/>"
      .html_safe
  end

  # makes the href/src part to be used in links or img tags
  def data_image_path(image)
    extension = image[:name].split('.').last
    if extension == 'svg'
      "data:image/svg+xml;base64, #{Base64.encode64(image[:data])}"
    elsif extension == 'jpg'
      "data:image/jpg;base64, #{Base64.encode64(image[:data])}"
    elsif extension == 'png'
      "data:image/png;base64, #{Base64.encode64(image[:data])}"
    elsif extension == 'jpeg'
      "data:image/png;base64, #{Base64.encode64(image[:data])}"
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

  # render markdown text on redcarpet
  def markdown(text)
    render_options = { hard_wrap: true, filter_html: true }
    markdown_options = { autolink: true, no_intra_emphasis: true }
    markdown = Redcarpet::Markdown.new(
      Redcarpet::Render::HTML.new(render_options), markdown_options
    )
    markdown.render(text).html_safe
  end

  # link tags to link which sorts them in context of active tab
  def link_tags(issue)
    path = user_project_issues_path(@project.user, @project)
    if issue.open?
      issue.tag_list.map { |t| link_to t, "#{path}/#{t}"}
        .join(', ')
    else
      issue.tag_list
        .map { |t| link_to t, "#{path}/#{t}?state=closed"}
        .join(', ')
    end
  end
end
