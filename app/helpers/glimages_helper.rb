module GlimagesHelper

  # pass in Glimage object
  def show_image(image)
    if image.is_svg?
      content_tag(:object, :data => "#{image.imagepath}") {}
    else
      tag :image, :src => "#{image.imagepath}"
    end
  end

  def glimage_tools(glimage)
    if user_signed_in? and glimage.belongs_to? current_user
      render 'glimages/glimage_tools'
    end
  end
end
