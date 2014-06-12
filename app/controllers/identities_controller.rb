class IdentitiesController < ApplicationController
  
  skip_before_filter :verify_authenticity_token, :only => [:create]
  before_filter :authenticate_user!, :only => [:index,:destroy]
  # This is the current homepage
  def new
    redirect_to(dashboard_url) if user_signed_in?    
    @allowedmethods = Identity.allowedmethods
  end

  # This is the callback from omniauth (/auth/:provider/callback)
  # Steps : 
  #
  # Check whether the Identity exists
  # --- If it does, Sign the user in
  # --- If it doesn't
  # --- --- If user is signed in : Create the identity
  # --- --- If user isn't signed in : 
  # --- --- --- If user exists : Add identity to user if he exists (by email)
  # --- --- --- If user doesn't exist : Create new user with that identity
  def create
    omniauth = request.env["omniauth.auth"]
    identity = Identity.where(:provider => omniauth['provider'],:uid => omniauth['uid']).first
    if identity 
      flash[:notice] = "Welcome back!"
  		sign_in_and_redirect(:user,identity.user)
    elsif user_signed_in?
      current_user.applyomniauth(omniauth)
      if current_user.save
  		  flash[:notice] = "Authentication Successful"
  		  redirect_to(identities_path)
      else
        flash[:alert] = "Not able to add identity"
      end
    elsif !User.where(:email => omniauth['info']['email']).empty?
      @user = User.where(:email => omniauth['info']['email']).first
      @user.applyomniauth(omniauth)
      if @user.save
        sign_in_and_redirect(:user,@user)
      else
        session[:omniauth] = omniauth.except('extra')
        redirect_to new_user_registration_url
      end
    else
      user = User.new
      user.applyomniauth(omniauth)
      if user.save
        flash[:notice] = "Account created!"
        sign_in_and_redirect(:user, user)
      else
        session[:omniauth] = omniauth.except('extra')
        redirect_to new_user_registration_url
      end    	    
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
      flash[:notice] = "Identity destroyed"
      redirect_to :back
    else
      flash[:alert] = "You can't delete this identity!"
      redirect_to :back
    end
  end

  
  
end
