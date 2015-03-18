require 'escape'

class ApplicationController < ActionController::Base
  include Escape
  include SessionsHelper
  protect_from_forgery
  before_action :configure_devise_permitted_parameters, if: :devise_controller?
  before_action :return_current_user_projects

  private

  def return_current_user_projects
    @projects = current_user.projects if user_signed_in?
  end

  # Returns an array containing the configured width and height for thumbnails.
  def thumbnail_size
    Glitter::Application.config.thumbnail_geometry
  end

  # Generates a thumbnail for a commit in the appropriate place.
  def generate_thumbnail(project, imagefile, commit_id)
    image = Magick::Image.read(
      "#{project.data_path}/satellite/#{imagefile}"
    ).first
    image.scale(
      thumbnail_size[0],
      thumbnail_size[1]
    ).write project.thumbnail_for(commit_id, true)
  end

  def image_commit(project, imagefile)
    return unless user_signed_in?
    commit_id = satellite_commit(
      project.satelliterepo,
      imagefile.original_filename,
      imagefile.read,
      "Add new file #{imagefile.original_filename}."
    )
    generate_thumbnail project, imagefile.original_filename, commit_id
    project.pushtobare
  end

  # TODO: refactor satellite_commit and satellite_delete

  def satellite_commit(repo, file, _contents, message)
    repo.index.add file
    options = {}
    author = { email: current_user.email,
               name: current_user.username,
               time: Time.now
             }
    options[:author] = author
    options[:committer] = author
    options[:tree] = repo.index.write_tree repo
    options[:update_ref] = 'HEAD'
    options[:message] = message
    options[:parents] = repo.empty? ? [] : [repo.head.target].compact
    commit_id = Rugged::Commit.create repo, options
    repo.index.write
    commit_id
  end

  def satellite_delete(repo, file_name)
    repo.index.remove file_name
    options = {}
    author = { email: current_user.email,
               name: current_user.username,
               time: Time.now
             }
    options[:author] = author
    options[:committer] = author
    options[:tree] = repo.index.write_tree repo
    options[:update_ref] = 'HEAD'
    options[:message] = "Deleted #{file_name}"
    options[:parents] = repo.empty? ? [] : [repo.head.target].compact
    Rugged::Commit.create repo, options
    repo.index.write
  end

  def pg(things, num)
    things.paginate(page: params[:page], per_page: num) unless things.nil?
  end

  protected

  def configure_devise_permitted_parameters
    registration_params = [:email, :password, :password_confirmation]

    if params[:action] == 'update'
      devise_parameter_sanitizer.for(:account_update) do |u|
        u.permit(registration_params << :name << :current_password)
      end
    elsif params[:action] == 'create'
      devise_parameter_sanitizer.for(:sign_up) do |u|
        u.permit(registration_params << :username)
      end
    end
  end

  def after_sign_in_path_for(_)
    dashboard_path
  end

end
