module SessionsHelper

  for platform in %w(facebook github linkedin twitter)
    define_method "#{platform}?" do
      if !Rails.env.production?
        true
      else
        true if ENV["#{platform.upcase}_KEY"] and ENV["#{platform.upcase}_SECRET"]
      end
    end
  end

  def store_return_to
    session[:return_to] = request.url
  end

  def redirect_back()
      redirect_to session[:return_to] || '/dashboard'
      session[:return_to] = nil
  end

end
