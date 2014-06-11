class Project < ActiveRecord::Base
  after_create :set_path, :init
  after_destroy :deletefiles
  
  belongs_to :user

  validates :name, :presence => true, uniqueness: { scope: :user }

  def last_updated
    repo = Grit::Repo.init_bare_or_open(File.join(path , '.git'))
    repo.commits.first.commited_date
  end

  def deletefiles
    FileUtils.rm_rf(self.path)
  end

  def imageurl(imagename)
    File.join(self.satellitedir,imagename).gsub("public","")
  end

  # Project URL
  def urlbase
    urlbase = File.join "/#{user.username}", self.name.gsub(" ", "%20")
    if self.private
      File.join(urlbase, self.uniqueurl)
    else
      urlbase
    end
  end

  def barerepo
    Rugged::Repository.new(self.barerepopath)
  end

  def satelliterepo
    Rugged::Repository.new(self.satelliterepopath)
  end

  def barerepopath
    File.join self.path , 'repo.git'
  end

  def satelliterepopath
    File.join self.path , 'satellite' , '.git'
  end

  def satellitedir
    File.join self.path , 'satellite'
  end

  # Push the existing contents of the satellite repo to the bare repo
  def pushtobare
    barerepo = Rugged::Repository.new(self.barerepopath)
    satelliterepo = Rugged::Repository.new(self.satelliterepopath)
    remote = Rugged::Remote.lookup(satelliterepo,'origin')
    unless remote 
      remote = Rugged::Remote.add(satelliterepo,'origin',barerepo.path)
    end
    remote.push(["refs/heads/master"])
  end

  private
  def set_path
    #TODO - let basedir for repos be set in app config
    user = User.find(self.user_id)
    self.path = File.join 'public', 'data', 'repos', user.id.to_s, self.id.to_s
    logger.debug "setting path - path: #{self.path}"
    self.save
  end

  # Path : public/data/repos/user_id/project_id
  # Bare Repository Path : public/data/repos/user_id/project_id/repo.git
  # Satellite Repository Path : public/data/repos/user_id/project_id/satellite/.git
  def init
    logger.debug "Initing repo path: #{path}"
    unless File.exists? self.path
      Rugged::Repository.init_at(self.barerepopath, :bare)
      Rugged::Repository.clone_at(self.barerepopath,self.satelliterepopath)
       
    end
  end

end
