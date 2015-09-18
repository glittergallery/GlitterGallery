class ProjectMembersController < ApplicationController
  before_filter :get_context, except: :destroy
  before_filter :authenticate_user!
  load_and_authorize_resource only: :destroy

  # GET /user_id/project_id/project_member
  def search
    @users = User.search(params[:find])
  end

  # POST /user_id/project_id/project_member
  def create
    new_member = ProjectMember.new(
      gallery_id: @project.id,
      member_id: params[:member_id],
      role: params[:role]
    )
    if @project.user.id == current_user.id && params[:role] != 'owner'
      if new_member.save
        flash[:alert] = "#{new_member.member.username} was added" +
          ' to your project'
        redirect_to project_settings_path(@project)
      else
        flash[:alert] = 'Something went wrong. Are you trying' +
          ' to add a member which already exists?'
        member = User.find(params[:member_id])
        redirect_to action: 'search', search: member.username
      end
    else
      fail CanCan::AccessDenied # cancan doesn't know about current project
    end
  end

  def destroy
    pm = ProjectMember.find(params[:id])
    if pm.destroy
      redirect_to :back
    else
      flash[:alert] = 'Something went wrong. Please retry after some time.'
      redirect_to :back
    end
  end
end
