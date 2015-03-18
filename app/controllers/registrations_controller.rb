class RegistrationsController < Devise::RegistrationsController
  private

  def build_resource(*args)
    super
    if session[:omniauth]
      omniauth = session[:omniauth]
      @user.applyomniauth(omniauth)
      @user.valid?
    end
  end
end
