class RegistrationsController < Devise::RegistrationsController

  def repo_init 
    if user_signed_in?
      r = Repo.new current_user.repo 
      r.init
      flash[:notice] = "Your repo has been inited!"
      redirect_to after_sign_in_path_for(current_user)
    end
  end

  protected

    # Send to get repo initialized
    def after_sign_up_path_for(resource)
      user_repo_init_path
    end

end
