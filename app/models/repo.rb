class Repo < ActiveRecord::Base

  def initialize(path)
    @path = path
  end

  def init
    unless File.exists? @path
      begin
        Grit::Repo.init_bare(@path)
      rescue
        logger.error "Unable to init repo at", @path
        raise
      end
    end
  end
  
end
