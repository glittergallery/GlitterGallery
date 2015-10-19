# Class which take up task of reading and writing of images
# Images can be read from both file and blob. ie read_path
# can either be a path to file or a blob string

module Gg
  class ImageProcessing
    attr_reader :read_path

    def initialize(read_path)
      @read_path = read_path
    end

    # Reads image at file read_path and writes the resized image
    # at write_path. Used to generate images for inspire page
    # and commit thumbnails
    def generate(write_path, size_type)
      image = Magick::Image.read(read_path).first
      size = find_size(size_type)
      image.resize_to_fill(size[0], size[1]).write write_path
    end

    # Reads blob read_path and writes the (resized) image at write_path
    # Used to generate images for project show page
    def blob_generate(write_path, size_type = nil)
      image = Magick::Image.from_blob(read_path).first
      size = find_size(size_type)
      image.resize_to_fill(size[0], size[1]) if size_type
      image.write write_path
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
  end
end
