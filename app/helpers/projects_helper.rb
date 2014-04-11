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
    if logged_in?
      unless @project.private and ((params[:xid]!=@project.uniqueurl and current_user.id!=@project.user_id))
        true
      else false
      end
    else
      unless @project.private and (params[:xid]!=@project.uniqueurl)
        true
      else false
      end
    end
  end
  
end
