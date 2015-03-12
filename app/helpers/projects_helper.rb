module ProjectsHelper

  def private_check
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    if user_signed_in?
      unless @project.private and ((params[:xid]!=@project.uniqueurl and current_user.id!=@project.user_id))
        true
      else false
      end
    else
      unless @project.private and (params[:xid]!=@project.uniqueurl)
        true
      else false
      end
    end
  end

  def owner_check
    @user = User.find_by username: params[:username]
    @project = Project.find_by user_id: @user.id, name: params[:project]
    if user_signed_in? and @project.user_id == current_user.id
      true
    else false
    end

  end

end
