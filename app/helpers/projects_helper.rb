module ProjectsHelper

  # pass in Glimage object
  def show_image(image)
    if image.is_svg?
      content_tag(:object, :data => "#{image.imagepath}") {}
    else
      tag :image, :src => "#{image.imagepath}"
    end
  end
  
end
