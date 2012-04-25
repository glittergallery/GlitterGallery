class Glimage < ActiveRecord::Base
  belongs_to :project

  attr_accessible :file, :filetype

  validates :file, :presence => true

  def is_svg?
    filetype == 'image/svg+xml'
  end

  def build_parents
    if @project.nil?
      @project = Project.find(project_id)
    end
    if @repo.nil?
      @repo = Repo.find(@project.repo_id)
    end
  end

  def filepath
    build_parents
    File.join @repo.path, @project.name, file
  end

  def imagepath
    build_parents
    reponame = @repo.path.split(File::SEPARATOR).pop
    File.join 'repos', reponame, @project.name, file
  end

  # Returns thumbnail path
  # path type is file or image
  def thumbnail(pathtype)
    filename = file.delete "."
    path = File.dirname(send(pathtype))
    File.join path, "#{filename}_thumb.png"
  end

  
end
