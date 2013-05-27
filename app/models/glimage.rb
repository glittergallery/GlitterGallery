class Glimage < ActiveRecord::Base
  belongs_to :project
  has_many :comments

  attr_accessible :file, :filetype, :private

  validates :file, :presence => true

  def is_svg?
    filetype == 'image/svg+xml' || file.split('.').pop == 'svg'
  end

  def filepath
    File.join(project.path, file)
  end

  def imagepath
    File::SEPARATOR + File.join('repos', project.user.email, project.name, file)
  end

  # Returns thumbnail path
  # path type is file or image
  def thumbnail(pathtype)
    filename = file.delete "."
    path = File.dirname(send(pathtype))
    File.join path, "#{filename}_thumb.png"
  end

  def belongs_to?(user)
    user.projects.include?(project)
  end
  
end
