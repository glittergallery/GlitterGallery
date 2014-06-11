require 'escape'

class ApplicationController < ActionController::Base
  include Escape
  include SessionsHelper
  protect_from_forgery
  before_filter :configure_permitted_parameters, if: :devise_controller?

  
  private
  
  # When new files are added to project, check them into its non bare git repo.
  # FIXME - we might want to do the push to bare repos here during the commit itself,
  #         alternatively we could assign a separate method to do that.
  # FIXME - thanks to the imagefile.orginal_filename concept, this idea currently works
  #         good just for uploaded files. See if there's a way to do it without using
  #         properties that just belong to only uploaded files. Hint - probably just use
  #         the commit function and drop this idea for non uploaded files.

  def image_commit(project, imagefile)
    if user_signed_in?
      satellite_commit project.satelliterepo, imagefile.original_filename, imagefile.read, "Add new file #{imagefile.original_filename}." 
      project.pushtobare
    end
  end

  # Add magicmockup to project repo
  # FIXME - we aren't using this right now anywhere, because it shows up as an ugly commit
  #         in the log. Look for a workaround. 

  def add_the_magic(project)
    if logged_in? and not File.exists? File.join(project.path, "magicmockup.js")
      magicfile = File.join 'app', 'assets', 'javascripts', 'magicmockup.js'
      magic = File.open(magicfile).read
      commit project.path, "magicmockup.js", magic, "Add magicmockup.js"
    end
  end

  # Useful for commiting changes to the non bare repo of a project.

  def satellite_commit(repo, file, contents, message)
    repo.index.add(file)
    options = {}
    options[:author] = { :email => current_user.email, :name => current_user.username, :time => Time.now }
    options[:committer] = { :email => current_user.email, :name => current_user.username, :time => Time.now }
    options[:tree] = repo.index.write_tree(repo)
    options[:update_ref] = 'HEAD'
    options[:message] = message
    options[:parents] = repo.empty? ? [] : [repo.head.target].compact
    Rugged::Commit.create(repo,options)
    repo.index.write
  end

  # Intended to generate thumbnails for Glimages (a previously used model).
  # FIXME - redo this to work without the glimage idea for all kinds of image files.

  def create_thumbnail(image)
    #FIXME - make the path consistent with working tree files.
    # the current proess relies on Glimage paths which we don't have.
    geo = Rails.application.config.thumbnail_geometry.nil? ? "100" : Rails.application.config.thumbnail_geometry
    cmd = Escape.shell_command ["convert", image.filepath, '-thumbnail', geo, image.thumbnail('filepath')]
    logger.debug "Command: #{cmd}"
    output = `#{cmd}`
    logger.debug "output #{output}"
    logger.debug "result #{$?.success?}"
  end

  # Returns thumbnail path
  # path type is file or image
  

  def thumbnail(pathtype)
    filename = File.basename(pathtype).delete "."
    path = File.dirname(send(pathtype))
    File.join path, "#{filename}_thumb.png"
  end


  def pg(things, num)
    return things.paginate(page: params[:page], per_page: num) unless things.nil?
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :username    
  end

  def after_sign_in_path_for(resource)
    dashboard_path
  end

end
