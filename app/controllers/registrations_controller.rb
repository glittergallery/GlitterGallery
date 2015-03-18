class RegistrationsController < Devise::RegistrationsController
  private

  def build_resource(*args)
    super
    return unless session[:omniauth]
    @user.applyomniauth(session[:omniauth])
    @user.valid?
  end
end
