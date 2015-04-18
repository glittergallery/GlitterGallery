require 'escape'

class ApplicationController < ActionController::Base
  include Escape
  include SessionsHelper
  include PathsHelper
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

  def satellite_delete(repo, file_name)
    repo.index.remove file_name
    author = current_user.git_author_params
    options = rugged_commit_options(author, repo, "Deleted #{file_name}")
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
