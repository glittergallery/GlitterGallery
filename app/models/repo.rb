class Repo < ActiveRecord::Base
  after_create :init
  belongs_to :user
  has_many :projects
  has_many :glimages, :through => :projects

  attr_accessible :path

  validates_presence_of :path

  private
  def init
    unless File.exists? path
      gitpath = File.join path , '.git'
      begin
        Grit::Repo.init_bare(gitpath)
      rescue
        logger.error "Unable to init repo at", path
        raise
      end
    end
  end
  
end
