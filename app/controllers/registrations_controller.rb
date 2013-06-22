class RegistrationsController < Devise::RegistrationsController

  def repo_init 
    if user_signed_in?
      r = Repo.new current_user.repo 
      begin
        r.init
      rescue
        flash[:error] = "Unable to init your repo"
      end
      flash[:notice] = "Your repo has been inited!"
      redirect_to after_sign_in_path_for(current_user)
    end
  end

  protected

    # Send to get repo initialized
    def after_sign_up_path_for(resource)
      users_repo_init_path
    end

end
