# This controller handles everything to do with handling sessions on GlitterGallery.
# We're using basic openid based auth at this stage, although we might also allow the usual 
# username/pass if there is demand.

class SessionsController < ApplicationController

  # Spits out the login form for the user. Right now, it just asks for the
  # user's openid url. It's tested with the FAS-OpenID login, it works quite smoothly.
  # FIXME - FAS-OpenID is only allowed for apps hosted on fedorahosted. We need to 
  #         incorporate other forms of login as well, including ones through Google auth. 
  #         Google and Yahoo use AX requests, and these haven't been covered yet. 
  #         Modify the login to accomodate every possible OpenID based login request. 

  def new
  end

  # Helps create a new session for a user. We're relying on fetching auth data from the 
  # OpenID provider. It helps to increase the forms of providers we support.
  # FIXME - See if we need a normalization check for the identity_url? 
  #         e.g, login fails for https://username.id.fedoraproject.org, whereas it works for 
  #         http://username.id.fedoraproject.org. 
  #         Basically, we shouldn't discriminate between different URLs referring to the same id.
  #         See http://en.wikipedia.org/wiki/URL_normalization for more on this.
  
  def create
    authenticate_with_open_id(params[:openid_identifier], 
                              required: [:email, :nickname]) do |result, identity_url, registration|
      if result.successful?
        #FIXME - needs normalizing before checking for the identity_url?
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

  # Destroys the user session on that device.


  def destroy
    logout
    redirect_to root_url
  end

end
