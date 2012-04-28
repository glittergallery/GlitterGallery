module GlimagesHelper

  # pass in Glimage object
  def show_image(image)
    if image.is_svg?
      content_tag(:object, :data => "/static/#{image.imagepath}") {}
    else
      tag :image, :src => "/static/#{image.imagepath}"
    end
  end
end
