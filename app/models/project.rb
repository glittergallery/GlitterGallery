class Project < ActiveRecord::Base
  before_create :set_path
  after_create :init

  belongs_to :user
  has_many :glimages
  accepts_nested_attributes_for :glimages

  attr_accessible :name, :path, :images_attributes

  validates :name, :presence => true

  # get the last update time
  # of the images in the project
  def last_updated
    g = Glimage.find_by_project_id(id, :order => 'updated_at DESC')
    g.updated_at
  end

  private
  def set_path
    logger.debug "setting path - path: #{path}"
    user = User.find(user_id)
    self.path = File.join '..', 'data', 'repos', user.email, name
  end

  def init
    logger.debug "Initing repo path: #{path}"
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
