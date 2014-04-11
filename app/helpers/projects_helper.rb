module ProjectsHelper

  # pass in Glimage object
  def show_image(image)
    if image.is_svg?
      content_tag(:object, :data => "#{image.imagepath}") {}
    else
      tag :image, :src => "#{image.imagepath}"
    end
  end

  def private_check
    @project = Project.find params[:id]
    unless @project.private and ((logged_in? and current_user.id != @project.user_id) or 
                            (!logged_in?))
      true
    else false
    end
  end
  
end
