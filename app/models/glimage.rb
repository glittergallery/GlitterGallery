class Glimage < ActiveRecord::Base
  belongs_to :project
  has_many :comments

  attr_accessible :file, :filetype

  validates :file, :presence => true

  def is_svg?
    filetype == 'image/svg+xml' || file.split('.').pop == 'svg'
  end

  def build_parents
    if @project.nil?
      @project = Project.find(project_id)
    end
    if @user.nil?
      @user= User.find(@project.user_id)
    end
  end

  def filepath
    build_parents
    File.join(@project.path, file)
  end

  def imagepath
    build_parents
    File::SEPARATOR + File.join('repos', @user.email, @project.name, file)
  end

  # Returns thumbnail path
  # path type is file or image
  def thumbnail(pathtype)
    filename = file.delete "."
    path = File.dirname(send(pathtype))
    File.join path, "#{filename}_thumb.png"
  end
  
end
