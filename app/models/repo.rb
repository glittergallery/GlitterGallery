class Repo < ActiveRecord::Base

  def initialize(path)
    @path = path
  end

  def init
    unless File.exists? @path
      Grit::Repo.init_bare(@path)
    end
  end
  
end
