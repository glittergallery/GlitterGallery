module SessionsHelper
  %w(facebook github linkedin twitter).each do |platform|
    define_method "#{platform}?" do
      if !Rails.env.production?
        true
      elsif ENV["#{platform.upcase}_KEY"] && ENV["#{platform.upcase}_SECRET"]
        true
      end
    end
  end

  def store_return_to
    session[:return_to] = request.url
  end

  def redirect_back
    redirect_to session[:return_to] || '/dashboard'
    session[:return_to] = nil
  end
end
