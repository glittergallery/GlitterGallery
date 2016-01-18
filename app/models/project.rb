class Project < ActiveRecord::Base

  include Sortable
  after_create :set_path, :init, :add_tags
  after_destroy :deletefiles
  before_save :set_uniqueurl

  belongs_to :user
  # many to many relationship between projects and project's followers
  has_many :project_followers, dependent: :destroy, foreign_key: 'project_id'
  has_many :followers, through: :project_followers,
                       class_name: 'User',
                       foreign_key: 'follower_id'
  # many to many relationship between projects and project's members
  has_many :project_members, dependent: :destroy, foreign_key: 'gallery_id'
  has_many :members, through: :project_members,
                     class_name: 'User',
                     foreign_key: 'member_id'
  has_many :issues

  validates :name, presence: true,
                   uniqueness: { scope: :user,
                                 message: 'is used by one of your projects(' +
                                   'includes deleted projects)' },
                   format: { with: /\A[a-z0-9\-_]+\z/i, message: 'can only, ' +
                      'have dash, underscore and alphanumeric characters' }
  validates :user, presence: true

  has_ancestry # Tree structure.
  acts_as_paranoid # Soft delete.
  acts_as_taggable
  ratyrate_rateable 'stars'

  # Perform full text search on projects name while taking
  # username in account. partial words are also searchable.
  include PgSearch

  pg_search_scope :search, against: :name,
     using: { tsearch: { dictionary: 'english', prefix: true } },
     associated_against: { user: :username }

  # Don't do any change to the children when the parent is deleted.
  # After all the parent is only soft deleted.
  def apply_orphan_strategy
    true
  end

  # We're using name in routes.
  def to_param
    name
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
    "#{data_path}" + '.git'
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
  # If given a destination, returns the tree at that destination.
  def branch_tree(id, destination = nil)
    res = branch_commit id
    return nil unless res
    if destination
      begin
        item = res.tree.path(destination)
      rescue
        return nil
      end
      return nil if item[:type] != :tree
      return barerepo.lookup(item[:oid])
    else
      return res.tree
    end
  end


  # Creates a new directory in the given branch and destination.
  def create_directory(branch, destination, name, author)
    destination ||= ''
    repo = satelliterepo
    repo.checkout(branch) unless repo.empty?
    file = File.join(name, '.gitignore')
    file = File.join(destination, file) unless destination.empty?
    absolute = File.join(satellitedir, file)
    FileUtils.mkdir_p File.dirname(absolute)
    FileUtils.touch(absolute)
    repo.index.add file
    message = "Add directory #{name}"
    commit_id = satellite_commit(repo, message, author, branch)
    fake_thumbnail commit_id
    repo.checkout('master')
    File.dirname(file)
  end

  # Creates a new branch from master.
  def create_branch(name)
    return unless /[a-z0-9\-_]/.match name
    begin
      res = satelliterepo.create_branch(name)
    rescue
      return nil
    end
    pushtobare name
    res
  end

  # Generates a symlink for a commit that's just the creation of a directory.
  def fake_thumbnail(commit_id)
    src = File.join(Rails.public_path, 'mini_dir.png')
    FileUtils.ln_s src, image_for(commit_id, 'thumbnails')
  end

  # Generates a thumbnail for a commit in the appropriate place.
  def generate_thumbnail(image_path, commit_id)
    Gg::ImageProcessing.new("#{satellitedir}/#{image_path}")
      .generate(image_for(commit_id, 'thumbnails'), 'thumbnail')
  end

  # returns the name of file present in inspire dir
  def find_inspire_image
    path = Dir[image_for('', 'mobile_inspire') + '*']
    path.first.split('/').last
  end

  # finds the last updated image's path on master
  # and calls to generate inspire image
  def inspire_image
    head = satelliterepo.head.target
    parent = head.parents.first
    diff = head.diff parent
    # in some case diff is nil, which breaks image generation
    # with nilclass error <- TODO: Investivate this further
    return if diff.nil? || diff.deltas.empty?
    path = diff.deltas.last.new_file[:path]
    generate_inspire_image path
  end


  # Generates thumbnails for exploration page and mobile
  # exploration page
  def generate_inspire_image(image_path)
    # first empty the inspire folder
    FileUtils.rm_rf("#{image_for('', 'mobile_inspire')}/.", secure: true)
    FileUtils.rm_rf("#{image_for('', 'desktop_inspire')}/.", secure: true)
    image = Gg::ImageProcessing.new("#{satellitedir}/#{image_path}")
    i_name = image_path.split('/').last
    image.generate(image_for(i_name, 'desktop_inspire'), 'desktop')
    image.generate(image_for(i_name, 'mobile_inspire'), 'mobile')
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
    touch # use current updated_at time
    commit_id
  end

  # Returns a human friendly commit message using the given images.
  # Example: "Add 2 images: a.png and b.png".
  def get_message(images)
    names = images.map { |i| i.original_filename}
    "Add #{ActionController::Base.helpers.pluralize(images.size, 'image')}"\
    ": #{names.to_sentence}"
  end

  # Adds a set of images into the project repository in the given dest.
  # Overwrites existing images if the new ones have similar names.
  def new_images(repo, dest, image_files)
    dest ||= ''
    image_files.each do |f|
      tmp = f.tempfile
      file = File.join satellitedir, dest, f.original_filename
      FileUtils.cp tmp.path, file
      if dest.empty?
        repo.index.add f.original_filename
      else
        repo.index.add File.join(dest, f.original_filename)
      end
    end
  end

  # Adds new images to the project in the given destination.
  # Takes care of creating an appropriate commit in the given branch.
  def add_images(branch, dest, image_files, author)
    repo = satelliterepo
    repo.checkout(branch) unless repo.empty?
    new_images repo, dest, image_files
    commit_id = satellite_commit(
      repo,
      get_message(image_files),
      author,
      branch
    )
    f = File.join(dest.to_s, image_files.last.original_filename)
    generate_thumbnail f, commit_id
    inspire_image  if branch == 'master'
    repo.checkout('master')
  end

  # Updates an image in the project repository.
  # Takes care of creating an appropriate commit in the given branch.
  def update_image(branch, old_path, new_file, author, message)
    repo = satelliterepo
    repo.checkout(branch)
    # to test if first image is updated
    file = File.join satellitedir, old_path
    FileUtils.cp new_file.tempfile.path, file
    repo.index.add old_path
    commit_id = satellite_commit(
      repo,
      message,
      author,
      branch
    )
    generate_thumbnail old_path, commit_id
    generate_inspire_image old_path if branch == 'master'
    repo.checkout('master')
  end

  # Returns the commit object with  the given id.
  # If no id is given, it returns the commit at head.
  # If the given id is invalid or the repo is empty, returns false.
  def commit(id = nil)
    get_object :commit, id
  end

  # Returns the path of the thumbnail for a specific commit
  # and images on inspire page
  # dest argument determines where should the image be stored
  # if svg file_name is passed then it is first changed to png
  def image_for(file_name, dest = '')
    prefix = data_path.dup
    file_name = file_name.split('/').last unless file_name.empty?
    file_name = file_name.gsub(/.svg/i, '.png')
    case dest
    when 'mobile_inspire'
      "#{prefix}/inspire/mobile/#{file_name}"
    when 'desktop_inspire'
      "#{prefix}/inspire/desktop/#{file_name}"
    when 'thumbnails'
      "#{prefix}/thumbnails/#{file_name}"
    when 'show_image_desk'
      "#{prefix}/show_images/desktop/#{file_name}"
    when 'show_image_mob'
      "#{prefix}/show_images/mobile/#{file_name}"
    when 'show'
      "#{prefix}/show_images/show/#{file_name}"
    end
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

  # returns image state a given commit and path
  def find_blob_data(sha, path)
    commit = barerepo.lookup sha
    tree = barerepo.lookup commit.tree_id
    blob = tree.path path
    blobdata = barerepo.read(blob[:oid]).data
    image = {
            name: blob[:name],
            data: blobdata
          }
    [image , commit]
  end

  private

  def set_path
    user = User.find user_id
    self.data_path = File.join Glitter::Application.config.repo_path,
                               user.username.to_s, name
    logger.debug "setting path - path: #{data_path}"
    save
  end

  # Path : public/data/repos/user_id/project_id
  # Bare repo Path : public/data/repos/user_id/project_id.git
  # Satellite repo Path : public/data/repos/user_id/project_id/satellite/.git
  def init
    return if File.exists? data_path
    if parent.nil?
      Rugged::Repository.init_at  barerepopath, :bare
      Rugged::Repository.clone_at barerepopath, satelliterepopath
      sym_hook
    else # it's a fork, therefore:
      Rugged::Repository.init_at barerepopath, :bare
      Rugged::Repository.clone_at parent.satelliterepopath, satelliterepopath
    end
    FileUtils.mkdir_p image_for('', 'mobile_inspire')
    FileUtils.mkdir_p image_for('', 'desktop_inspire')
    FileUtils.mkdir_p image_for('', 'thumbnails')
    FileUtils.mkdir_p image_for('', 'show_image_desk')
    FileUtils.mkdir_p image_for('', 'show_image_mob')
    FileUtils.mkdir_p image_for('', 'show')

    return if satelliterepo.empty?
    pushtobare
    copy_generated_images parent
  end

  # copy inspire image in fork from the parent project
  def copy_generated_images(parent)
    img = parent.find_inspire_image
    mobile = parent.image_for img, 'mobile_inspire'
    desktop = parent.image_for img, 'desktop_inspire'
    thumbnails = parent.image_for '', 'thumbnails'

    FileUtils.cp(mobile, "#{data_path}/inspire/mobile")
    FileUtils.cp(desktop, "#{data_path}/inspire/desktop")
    FileUtils.cp_r("#{thumbnails}/.", "#{data_path}/thumbnails")
  end

  # makes a symlink to hooks in gitlab-shell in each project
  # dir structure:
  # |--home/username
  #    |--GlitterGallery
  #    |--gitlab-shell
  def sym_hook
    local_hooks_directory = File.join(barerepopath, 'hooks')
    shell_hook_dir = File.join(Glitter::Application.config.shell_path, 'hooks')
    new_dir_name = "#{local_hooks_directory}.old.#{Time.now.to_i}"
    FileUtils.mv(local_hooks_directory, new_dir_name)
    FileUtils.ln_s(shell_hook_dir, local_hooks_directory)
  end

  # default list of tags
  def add_tags
    self.tag_list = 'bug, feature, improvement, feedback, discussion, help'
  end
end
