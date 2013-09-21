require 'escape'

# Methods here are accessibe by all controllers.

class ApplicationController < ActionController::Base
  include Escape
  include SessionsHelper
  protect_from_forgery
  
  private
  
  # When new files are added to project, check them into its non bare git repo.
  # FIXME - we might want to do the push to bare repos here during the commit itself,
  #         alternatively we could assign a separate method to do that.
  # FIXME - thanks to the imagefile.orginal_filename concept, this idea currently works
  #         good just for uploaded files. See if there's a way to do it without using
  #         properties that just belong to only uploaded files. Hint - probably just use
  #         the commit function and drop this idea for non uploaded files.

  def image_commit(project, imagefile)
    if logged_in?
      commit project.path, imagefile.original_filename, imagefile.read, "created new file #{imagefile.original_filename}" 
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

  def commit(repopath, file, contents, message)
    # set up repo and index
    repo = Grit::Repo.new repopath
    index = Grit::Index.new repo
    # write file to repo
    fullpath = File.join repopath, file
    File.open(fullpath, 'wb') {|f| f.write contents}
    # commit file
    index.add file, contents
    parent = repo.commits.count > 0 ? [repo.commits.first] : nil
    index.commit message, parent
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

end
