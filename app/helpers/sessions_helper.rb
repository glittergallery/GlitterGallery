module SessionsHelper

  def facebook?
    true if ENV["FACEBOOK_KEY"] and ENV["FACEBOOK_SECRET"]
  end

  def github?
    true if ENV["GITHUB_KEY"] and ENV["GITHUB_SECRET"]
  end

  def linkedin?
    true if ENV["LINKEDIN_KEY"] and ENV["LINKEDIN_SECRET"]
  end

  def twitter?
    true if ENV["TWITTER_KEY"] and ENV["TWITTER_SECRET"]
  end

  def store_return_to
    session[:return_to] = request.url
  end

  def redirect_back()
      redirect_to session[:return_to] || '/dashboard'
      session[:return_to] = nil
  end

end
