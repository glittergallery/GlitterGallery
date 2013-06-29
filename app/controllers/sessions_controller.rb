class SessionsController < ApplicationController

  def new
  #spits out the user signin form
  end
  
  def create
    authenticate_with_open_id do |result, identity_url|
      if result.successful?
        #FIXME - needs normalizing before checking for the identity_url
        unless @current_user = User.find_by_identity_url(identity_url)
          @current_user = User.create(identity_url: identity_url)
        end
        successful_login @current_user
      else
        failed_login result.message
      end
    end
  end


  private
  def successful_login(user)
    #session[:user_id] = @current_user.id
    cookies[:user_id] = user.id
    redirect_to(dashboard_url)
  end

  def failed_login(message)
    flash[:error] = message
    redirect_to(new_session_url)
  end
end
