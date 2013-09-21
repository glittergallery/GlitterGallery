class Project < ActiveRecord::Base
  before_create :set_path
  after_create :init

  belongs_to :user
  #accepts_nested_attributes_for :glimages

  attr_accessible :name, :path

  validates :name, :presence => true

  # get the last update time
  # of the images in the project
  def last_updated
    repo = Grit::Repo.init_bare_or_open(File.join(path , '.git'))
    repo.commits.first.commited_date
  end

  private
  def set_path
    #TODO - let basedir for repos be set in app config
    logger.debug "setting path - path: #{path}"
    user = User.find(user_id)
    self.path = File.join 'public', 'data', 'repos', user.email, name
  end

  def init
    logger.debug "Initing repo path: #{path}"
    unless File.exists? path
      gitpath = File.join path , '.git'
      Grit::Repo.init_bare(gitpath)
      bare_repo = Grit::Git.new (File.join (path + "_bare"), '.git')
      bare_repo.clone({}, gitpath, (File.join (path.to_s + "_bare"), '.git'))
    end
  end

end
