class Project < ActiveRecord::Base
  after_create :set_path, :init
  after_destroy :deletefiles

  belongs_to :user
  has_many :project_followers,
              dependent: :destroy,
              foreign_key: "project_id"
  has_many :followers,
              through: :project_followers,
              class_name: "User",
              foreign_key: "follower_id"
  has_many :issues

  validates :name,
              presence: true,
              uniqueness: { scope: :user }
  validates :user,
              presence: true

  def last_updated
    repo = barerepo
    repo.head.target.time
  end

  def deletefiles
    FileUtils.rm_rf self.path
  end

  def imageurl imagename
    File.join(self.satellitedir , imagename).gsub('public', '')
  end

  # Project URL
  def urlbase
    File.join("/#{user.username}",
              self.name.gsub(" ", "%20"),
              self.uniqueurl.to_s).gsub(/\/$/, '')
  end

  def issues_url
    File.join urlbase, 'issues'
  end

  def barerepo
    Rugged::Repository.new self.barerepopath
  end

  def satelliterepo
    Rugged::Repository.new self.satelliterepopath
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
    barerepo = Rugged::Repository.new self.barerepopath
    satelliterepo = Rugged::Repository.new self.satelliterepopath
    remote = satelliterepo.remotes['bare']
    unless remote
      remote = satelliterepo.remotes.create 'bare', barerepo.path
    end
    satelliterepo.push remote, ["refs/heads/master"]
  end

  private

  def set_path
    user = User.find self.user_id
    self.path = File.join Glitter::Application.config.repo_dir,
                          'repos', user.email.to_s, name
    logger.debug "setting path - path: #{self.path}"
    self.save
  end

  # Path : public/data/repos/user_id/project_id
  # Bare Repository Path : public/data/repos/user_id/project_id/repo.git
  # Satellite Repository Path : public/data/repos/user_id/project_id/satellite/.git
  def init
    logger.debug "Initing repo path: #{path}"
    unless File.exists? self.path
      if self.parent.nil? or self.parent == self.id
        Rugged::Repository.init_at  self.barerepopath, :bare
        Rugged::Repository.clone_at self.barerepopath, self.satelliterepopath
      else # it's a fork, therefore:
        parent = Project.find self.parent
        Rugged::Repository.init_at self.barerepopath, :bare
        Rugged::Repository.clone_at parent.satelliterepopath, self.satelliterepopath
      end
      self.pushtobare
    end
  end

end
