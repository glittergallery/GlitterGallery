class SessionsController < ApplicationController

  def new
    #spits out the user login form
  end
  
  def create
    authenticate_with_open_id(params[:openid_identifier], required: [:email, :nickname]) do |result, identity_url, registration|
      if result.successful?
        #FIXME - needs normalizing before checking for the identity_url
        unless user = User.find_by_identity_url(identity_url)
          user = User.create(identity_url: identity_url, email: registration['email'], username: registration['nickname'])
        end
        login user
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
