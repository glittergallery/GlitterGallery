class SessionsController < ApplicationController

  def new
  #spits out the form
  end
  
  def create
    authenticate_with_open_id do |result, identity_url|
      if result.successful?
        #@current_user = User.find_by_identity_url.OpenIdAuthentication.normalize_url(identity_url)
        #if @current_user
          successful_login(identity_url)
        #else
        #  failed_login "Sorry, no user by that identity URL exists (#{identity_url})"
        #end
      else
        failed_login result.message
      end
    end
  end


  private
  def successful_login(identity_url)
    #session[:user_id] = @current_user.id
    @logged_in_user = User.create
    cookies[:user_id] = @logged_in_user.id
    redirect_to(root_url)
  end

  def failed_login(message)
    flash[:error] = message
    redirect_to(new_session_url)
  end
end
