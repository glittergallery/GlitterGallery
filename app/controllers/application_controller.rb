require 'escape'

class ApplicationController < ActionController::Base
  include Escape
  include SessionsHelper
  protect_from_forgery
  before_action :configure_devise_permitted_parameters, if: :devise_controller?
  before_action :return_current_user_projects

  private

  def render_404
    render file: "#{Rails.root}/public/404.html", layout: false, status: 404
  end

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
    author = current_user.git_author_params
    options = rugged_commit_options(author, repo, message)
    commit_id = Rugged::Commit.create repo, options
    repo.index.write
    commit_id
  end

  def satellite_delete(repo, file_name)
    repo.index.remove file_name
    author = current_user.git_author_params
    options = rugged_commit_options(author, repo, "Deleted #{file_name}")
    Rugged::Commit.create repo, options
    repo.index.write
  end

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

  # used to deliver notification on various events
  def notify_users(action, object_type, object_id, victims)
    Notification.create(
          actor: current_user,
          action: action,
          object_type: object_type,
          object_id: object_id,
          victims: victims
        )
  end
end
