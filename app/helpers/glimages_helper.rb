module GlimagesHelper

  # pass in Glimage object
  def show_image(image)
    if image.is_svg?
      tag "object", :data => "/assets/#{image.imagepath}"
    else
      image_tag image.imagepath
    end
  end
end
