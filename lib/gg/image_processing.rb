# Class which take up task of reading and writing of images
# Images can be read from both file and blob. ie read_path
# can either be a path to file or a blob string

module Gg
  class ImageProcessing
    attr_reader :read_path

    SUPPORTED_FILE_TYPES = ['.png', '.jpeg', '.jpg', '.svg', '']

    # Only read_path is included because same source is used to generate
    # different image types with different write_path and size_type
    def initialize(read_path)
      @read_path = read_path
    end

    # Reads image at file read_path and writes the resized image
    # at write_path. Used to generate images for inspire page
    # and commit thumbnails
    def generate(write_path, size_type)
      if SUPPORTED_FILE_TYPES.include? File.extname(read_path)
        image = Magick::Image.read(read_path).first
        write_image image, write_path, size_type
      else
        write_default_image write_path, size_type
      end
    end

    # Reads blob read_path and writes the (resized) image at write_path
    # Used to generate images for project show page
    def blob_generate(write_path, size_type = nil)
      if SUPPORTED_FILE_TYPES.include? File.extname(write_path)
        image = Magick::Image.from_blob(read_path).first
        write_image image, write_path, size_type
      else
        write_default_image write_path, size_type
      end
    end

    private

    # Returns the size of image bases on size_type
    def find_size(size_type)
      case size_type
      when "desktop"
        Glitter::Application.config.desktop_geometry
      when "mobile"
        Glitter::Application.config.mobile_geometry
      when "thumbnail"
        Glitter::Application.config.thumbnail_geometry
      end
    end

    # Writes the passes image to given write path
    # if passed image happens to be svg then it changes image
    # to png
    def write_image(image, write_path, size_type)
      size = find_size size_type
      image.resize_to_fill!(size[0], size[1]) if size_type
      image.format = "PNG" if image.format == "SVG"
      write_path.gsub!(/.svg/i, ".png")
      image.write write_path
    end

    # Write default icon for unsupported file types
    # Ext will be empty for commit thumbnails
    def write_default_image(write_path, size_type)
      image = Magick::Image.read("public/default_icon.png").first
      ext = File.extname(write_path)
      write_path.gsub!(/#{ext}/i, ".png") unless ext.empty?
      write_image image, write_path, size_type
    end
  end
end
