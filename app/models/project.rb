class Project < ActiveRecord::Base
  after_create :set_path, :init
  after_destroy :deletefiles

  belongs_to :user
  has_many :project_followers, dependent: :destroy,
                               foreign_key: 'project_id'
  has_many :followers, through: :project_followers,
                       class_name: 'User',
                       foreign_key: 'follower_id'
  has_many :issues

  validates :name, presence: true,
                   uniqueness: { scope: :user,
                                 conditions: -> { where(deleted_at: nil) },
                                 message: 'is used by one of your projects.' }
  validates :user, presence: true

  has_ancestry # Tree structure.
  acts_as_paranoid # Soft delete.

  # Don't do any change to the children when the parent is deleted.
  # After all the parent is only soft deleted.
  def apply_orphan_strategy
    true
  end

  # Returns a list of public projects that belong to other users.
  def self.inspiring_projects_for(user_id)
    Project.where.not(private: true, user_id: user_id)
  end

  def last_updated
    repo = barerepo
    repo.head.target.time
  end

  def deletefiles
    FileUtils.rm_rf data_path
  end

  def imageurl(imagename)
    File.join(satellitedir , imagename).gsub('public', '')
  end

  # Project URL
  def urlbase
    File.join("/#{user.username}",
              name.gsub(' ', '%20'),
              uniqueurl.to_s).gsub(/\/$/, '')
  end

  def issues_url
    File.join urlbase, 'issues'
  end

  def barerepo
    Rugged::Repository.new barerepopath
  end

  def satelliterepo
    Rugged::Repository.new satelliterepopath
  end

  def barerepopath
    File.join data_path , 'repo.git'
  end

  def satelliterepopath
    File.join data_path , 'satellite' , '.git'
  end

  def satellitedir
    File.join data_path , 'satellite'
  end

  # Returns the path of the thumbnail for a specific commit,
  # if add_public is false "public/" is removed from the path.
  def thumbnail_for(commit_id, add_public = true)
    prefix = data_path.dup
    prefix.sub!('public', '') unless add_public
    "#{prefix}/thumbnails/#{commit_id}"
  end

  # Push the existing contents of the satellite repo to the bare repo
  def pushtobare
    remote = satelliterepo.remotes['bare']
    remote = satelliterepo.remotes.create 'bare', barerepo.path unless remote
    satelliterepo.push remote, ['refs/heads/master']
  end

  private

  def set_path
    user = User.find user_id
    self.data_path = File.join Glitter::Application.config.repo_dir,
                               'repos', user.email.to_s, name
    logger.debug "setting path - path: #{data_path}"
    save
  end

  # Path : public/data/repos/user_id/project_id
  # Bare repo Path : public/data/repos/user_id/project_id/repo.git
  # Satellite repo Path : public/data/repos/user_id/project_id/satellite/.git
  def init
    logger.debug "Initing repo path: #{data_path}"
    unless File.exists? data_path
      if parent.nil?
        Rugged::Repository.init_at  barerepopath, :bare
        Rugged::Repository.clone_at barerepopath, satelliterepopath
      else # it's a fork, therefore:
        Rugged::Repository.init_at barerepopath, :bare
        Rugged::Repository.clone_at parent.satelliterepopath, satelliterepopath
      end
      FileUtils.mkdir_p thumbnail_for('', true)
      pushtobare unless satelliterepo.empty?
    end
  end

end
