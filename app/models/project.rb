class Project < ActiveRecord::Base
  after_create :set_path, :init
  after_destroy :deletefiles
  before_save :set_uniqueurl

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

  # We're using name in routes.
  def to_param
    name
  end

  # Returns a list of public projects that belong to other users.
  def self.inspiring_projects_for(user_id)
    Project.where.not(private: true, user_id: user_id)
  end

  def set_uniqueurl
    self.uniqueurl ||= SecureRandom.hex if private
  end

  def followed_by?(user)
    ProjectFollower.following? user, self
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

  # Returns an object in the repository with the given id.
  # Returns false if the id is an id of an object of another type,
  # if the id is invalid or if the repository is empty.
  def get_object(type, id)
    repo = barerepo
    return false if repo.empty?
    return repo.head.target unless id
    begin
      res = repo.lookup id
    rescue
      return false
    end
    (res.type == type) ? res : false
  end

  # Returns the tree object with the given id.
  # If no id is given, it returns the tree at head.
  # If the given id is invalid or the repo is empty, returns false.
  def tree(id = nil)
    res = get_object :tree, id
    return false unless res
    (res.type == :tree) ? res : res.tree
  end

  # Returns the blob object at destination for the given commit oid.
  # Returns nil if given invalid data.
  def blob(oid, destination)
    begin
      res = barerepo.blob_at oid, destination
    rescue
      return nil
    end
    res
  end

  def branch_commit(id)
    res = barerepo.branches[id] if id
    return res.target if res
    commit id
  end

  def branch?(branch)
    return true unless branch
    !barerepo.branches[branch].nil?
  end

  # Returns the target tree of the branch specified in id.
  # If no such branch exists, returns the tree of the given commit id.
  def branch_tree(id)
    res = branch_commit id
    return res.tree if res
  end

  # Creates a new branch from master.
  def create_branch(name)
    begin
      res = satelliterepo.create_branch(name)
    rescue
      return nil
    end
    pushtobare name
    res
  end

  # Generates a thumbnail for a commit in the appropriate place.
  def generate_thumbnail(image_path, commit_id)
    thumb_size = Glitter::Application.config.thumbnail_geometry
    image = Magick::Image.read(
      "#{data_path}/satellite/#{image_path}"
    ).first
    image.scale(
      thumb_size[0],
      thumb_size[1]
    ).write thumbnail_for(commit_id, true)
  end

  # Returns a hash that can be passed to rugged while creating a commit
  def rugged_commit_options(author, repo, message)
    {
      author: author,
      committer: author,
      tree: repo.index.write_tree(repo),
      update_ref: 'HEAD',
      message: message,
      parents: repo.empty? ? [] : [repo.head.target].compact
    }
  end

  # Creates a commit in the given satellite repo and pushes to the bare one.
  def satellite_commit(repo, message, author, branch)
    options = rugged_commit_options(author, repo, message)
    commit_id = Rugged::Commit.create repo, options
    repo.index.write
    pushtobare branch
    commit_id
  end

  # Returns a human friendly commit message using the given images.
  # Example: "Add 2 images: a.png and b.png".
  def get_message(images)
    names = images.map { |i| i.original_filename}
    "Add #{ActionController::Base.helpers.pluralize(images.size, 'image')}"\
    ": #{names.to_sentence}"
  end

  # Adds a set of images into the project repository.
  # Overwrites existing images if the new ones have similar names.
  def new_images(repo, image_files)
    image_files.each do |f|
      tmp = f.tempfile
      file = File.join satellitedir, f.original_filename
      FileUtils.cp tmp.path, file
      repo.index.add f.original_filename
    end
  end

  # Adds new images to the project when old_path is not given.
  # Updates an image if old_path is given(a message should be given too).
  # Takes care of creating an appropriate commit in the given branch.
  def add_images(branch, image_files, author, message = nil, old_path = nil)
    repo = satelliterepo
    repo.checkout(branch) unless repo.empty?
    if old_path
      update_image repo, old_path, image_files.last
    else
      new_images repo, image_files
      message ||= get_message image_files
    end
    commit_id = satellite_commit(
      repo,
      message,
      author,
      branch
    )
    generate_thumbnail old_path || image_files.last.original_filename, commit_id
    repo.checkout('master')
  end

  # Updates an image in the project repository.
  def update_image(repo, old_path, new_file)
    file = File.join satellitedir, old_path
    FileUtils.cp new_file.tempfile.path, file
    repo.index.add old_path
  end

  # Returns the commit object with  the given id.
  # If no id is given, it returns the commit at head.
  # If the given id is invalid or the repo is empty, returns false.
  def commit(id = nil)
    get_object :commit, id
  end

  # Returns the path of the thumbnail for a specific commit,
  # if add_public is false "public/" is removed from the path.
  def thumbnail_for(commit_id, add_public = true)
    prefix = data_path.dup
    prefix.sub!('public', '') unless add_public
    "#{prefix}/thumbnails/#{commit_id}"
  end

  # Push the existing contents of the satellite repo to the bare repo
  def pushtobare(branch = 'master')
    remote = satelliterepo.remotes['bare']
    remote = satelliterepo.remotes.create 'bare', barerepo.path unless remote
    satelliterepo.push remote, ["refs/heads/#{branch}"]
  end

  def create_fork_project
    child = Project.new name: name,
                        uniqueurl: uniqueurl,
                        parent: self
    if private
      child.private = true
      child.uniqueurl = SecureRandom.hex
    end
    child
  end

  private

  def set_path
    user = User.find user_id
    self.data_path = File.join Glitter::Application.config.repo_dir,
                               'repos', user.username.to_s, name
    logger.debug "setting path - path: #{data_path}"
    save
  end

  # Path : public/data/repos/user_id/project_id
  # Bare repo Path : public/data/repos/user_id/project_id/repo.git
  # Satellite repo Path : public/data/repos/user_id/project_id/satellite/.git
  def init
    return if File.exists? data_path

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
