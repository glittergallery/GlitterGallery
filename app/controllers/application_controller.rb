require 'escape'
class ApplicationController < ActionController::Base
  include Escape
  protect_from_forgery
  
  private
  # Write a file and commit to the repo
  def image_commit(project, imagefile)
    if user_signed_in?
      commit project.path, imagefile.original_filename, imagefile.read, "new file #{imagefile.original_filename}" 
    end
  end

  # Add magicmockup to project repo
  def add_the_magic(project)
    if user_signed_in? and not File.exists? File.join(project.path, "magicmockup.js")
      magicfile = File.join 'app', 'assets', 'javascripts', 'magicmockup.js'
      magic = File.open(magicfile).read
      commit project.path, "magicmockup.js", magic, "Add magicmockup.js"
    end
  end

  def commit(repopath, file, contents, message)
    # set up repo and index
    repo = Grit::Repo.new repopath
    index = Grit::Index.new repo
    # write file to repo
    fullpath = File.join repopath, file
    File.open(fullpath, 'wb') {|f| f.write contents}
    # commit file
    index.add fullpath, contents
    parent = repo.commits.count > 0 ? [repo.commits.first] : nil
    index.commit message, parent
  end

  def create_thumbnail(image)
    geo = Rails.application.config.thumbnail_geometry.nil? ? "100" : Rails.application.config.thumbnail_geometry
    cmd = Escape.shell_command ["convert", image.filepath, '-thumbnail', geo, image.thumbnail('filepath')]
    logger.debug "Command: #{cmd}"
    output = `#{cmd}`
    logger.debug "output #{output}"
    logger.debug "result #{$?.success?}"
  end

end
