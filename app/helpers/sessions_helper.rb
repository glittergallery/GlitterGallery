module SessionsHelper
  def login(user)
    session[:current_user_id]=user.id
    redirect_to dashboard_url
  end
  
  def current_user
    @current_user ||= User.find(session[:current_user_id]) if session[:current_user_id]
    rescue ActiveRecord::RecordNotFound
  end
   
  def logged_in?
    !current_user.nil?
  end
   
  def logout
    session[:current_user_id]=nil      
  end

  def authenticate_user!
    if !current_user
      flash[:alert] = 'You need to login before accessing this page!'
      redirect_to login_path
    end
  end 
end
