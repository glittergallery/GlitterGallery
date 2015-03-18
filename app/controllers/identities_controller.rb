class IdentitiesController < ApplicationController

  skip_before_filter :verify_authenticity_token, only: :create
  before_filter :authenticate_user!, only: [:index, :destroy]

  # This is the current homepage
  def new
    redirect_to(dashboard_url) if user_signed_in?
    @allowedmethods = Identity.allowedmethods
  end

  # Steps to handle omniauth callback :
  #
  # Check whether the Identity exists
  # --- If it does, Sign the user in
  # --- If it doesn't
  # --- --- If user is signed in : Create the identity
  # --- --- If user isn't signed in :
  # --- --- --- If user exists : Add identity to user if he exists (by email)
  # --- --- --- If user doesn't exist : Create new user with that identity

  # This is the callback from omniauth (/auth/:provider/callback)
  def create
    omniauth = request.env['omniauth.auth']
    # Check whether the Identity exists
    identity = Identity.from_omniauth(omniauth)
    if identity # If it does, sign the user in
      flash[:notice] = 'Welcome back!'
      sign_in_and_redirect(:user, identity.user)
    else
      handle_new_identity(omniauth)
    end
  end

  def handle_new_identity(omniauth)
    if user_signed_in?
      create_identity(omniauth)
    elsif !User.where(email: omniauth['info']['email']).empty?
      @user = User.where(email: omniauth['info']['email']).first
      add_identity_to_user(@user, omniauth)
    else
      create_new_user_from_omniauth(omniauth)
    end
  end

  def create_identity(omniauth)
    current_user.applyomniauth(omniauth)
    if current_user.save
      flash[:notice] = 'Authentication Successful'
      redirect_to(identities_path)
    else
      flash[:alert] = 'Not able to add identity'
    end
  end

  def add_identity_to_user(user, omniauth)
    user.applyomniauth(omniauth)
    if user.save
      sign_in_and_redirect(:user, user)
    else
      session[:omniauth] = omniauth.except('extra')
      redirect_to new_user_registration_url
    end
  end

  def create_new_user_from_omniauth(omniauth)
    user = User.new
    user.applyomniauth(omniauth)
    if user.save
      flash[:notice] = 'Account created!'
      sign_in_and_redirect(:user, user)
    else
      session[:omniauth] = omniauth.except('extra')
      redirect_to new_user_registration_url
    end
  end

  def index
    @identities = current_user.identities
    @allowedmethods = Identity.allowedmethods
  end

  def destroy
    @delete = Identity.find(params[:id])
    if @delete.user_id == current_user.id
      @delete.destroy
      flash[:notice] = 'Identity destroyed'
      redirect_to :back
    else
      flash[:alert] = "You can't delete this identity!"
      redirect_to :back
    end
  end

  def failed_to_authenticate
    flash[:alert] = "Authentication Failed! If this isn't the first time " \
                    "you're seeing this error, please let us know at " \
                    'http://github.com/GlitterGallery'
    redirect_to root_url
  end
end
