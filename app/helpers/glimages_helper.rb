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
    if logged_in? and glimage.belongs_to? current_user
      render 'glimages/glimage_tools'
    end
  end

  def private_msg(glimage)
    if glimage.private?
      content_tag :p, :class => 'private' do
        'This image is private. That means it will not be included in the public gallery.'
      end
    else
      content_tag :p, :class => 'public' do
        'This image is public. That means it will be included in the public gallery.'
      end
    end
  end
end
