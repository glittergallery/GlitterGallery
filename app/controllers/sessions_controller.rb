class SessionsController < ApplicationController

  def new
  #spits out the user signin form
  end
  
  def create
    authenticate_with_open_id do |result, identity_url|
      if result.successful?
        #FIXME - needs normalizing before checking for the identity_url
        unless user = User.find_by_identity_url(identity_url)
          user = User.create(identity_url: identity_url)
        end
        sign_in user
      else
        failed_login result.message
      end
    end
  end


  def destroy
    logout
    redirect_to root_url
  end

private

  def failed_login(message)
    flash[:error] = message
    redirect_to(login_url)
  end
end
