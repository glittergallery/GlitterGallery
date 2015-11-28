module Gg
  class SanitizeFilename

    attr_accessor :filename, :root_path

    def initialize(root_path, filename)
      @root_path = root_path
      @filename = filename
    end

    # Replaces characters in strings that are illegal/unsafe for filenames.
    # Illegal Characters on Various Operating Systems
    # ? < > \ : * | "
    # https://kb.acronis.com/content/39790
    def safe_filepath
      filename.gsub!(/[\?<>\\:\*\|":]/, '_')
      full_path = File.join(root_path, filename)
      if(File.exists? full_path) && file_inside_root?(full_path)
        return full_path
      else
        raise 'Disallowed file requested'
      end
    end

    private

    # filename like ../../etc/passwd will return false
    def file_inside_root?(full_path)
      full_path = File.expand_path full_path
      if full_path.match Regexp.new('^' + Regexp.escape(root_path))
        true
      else
        false
      end
    end
  end
end
