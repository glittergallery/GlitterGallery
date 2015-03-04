require 'escape'

class ApplicationController < ActionController::Base
  include Escape
  include SessionsHelper
  protect_from_forgery
  before_action :configure_devise_permitted_parameters, if: :devise_controller?
  before_action :return_current_user_projects

  private

  def return_current_user_projects
    if user_signed_in?
      @projects = current_user.projects
    end
  end

  def generate_thumbnail(path, imagefile, commit_id)
    image = Magick::Image.read("#{path}/satellite/#{imagefile.original_filename}").first
    image.scale(50,50).write "#{path}/thumbnails/#{commit_id}"
  end

  def image_commit(project, imagefile)
    if user_signed_in?
      commit_id = satellite_commit project.satelliterepo,
                       imagefile.original_filename,
                       imagefile.read,
                       "Add new file #{imagefile.original_filename}."
      generate_thumbnail project.path, imagefile, commit_id
      project.pushtobare
    end
  end

  #TODO - refactor satellite_commit and satellite_delete

  def satellite_commit(repo, file, contents, message)
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
    return things.paginate(page: params[:page], per_page: num) unless things.nil?
  end

  protected

  def configure_devise_permitted_parameters
    registration_params = [:email, :password, :password_confirmation]

    if params[:action] == 'update'
      devise_parameter_sanitizer.for(:account_update) {
        |u| u.permit(registration_params << :name << :current_password)
      }
    elsif params[:action] == 'create'
      devise_parameter_sanitizer.for(:sign_up) {
        |u| u.permit(registration_params << :username)
      }
    end
  end

  def after_sign_in_path_for(resource)
    dashboard_path
  end

end
