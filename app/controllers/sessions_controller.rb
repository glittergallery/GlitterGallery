class SessionsController < ApplicationController

  def new
    # spits out the user login form
    # takes in the openid url, and asks 
    # for email and nick from provider
  end
  
  def create
    authenticate_with_open_id(params[:openid_identifier], 
                              required: [:email, :nickname]) do |result, identity_url, registration|
      if result.successful?
        #FIXME - needs normalizing before checking for the identity_url
        unless @user = User.find_by_identity_url(identity_url) or
                      User.find_by_email(registration['email'])
          # creates new user if there was none registered
          # with the provided url, or fetched email            
          @user = User.create(identity_url: identity_url, 
                             email: registration['email'], 
                             username: registration['nickname'])
        end
        login @user
      else
        # indicates that login failed
        # something went wrong with the auth 
        # process, prompt for a retry
        flash[:alert] = "Something went wrong. Please try logging in again."
        redirect_to(login_url)
      end
    end
  end


  def destroy
    logout
    redirect_to root_url
  end

end
