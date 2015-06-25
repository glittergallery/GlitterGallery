class ProjectMembersController < ApplicationController
  before_filter :get_context, except: :destroy

  def search
    @users = User.search(params[:search])
  end

  def create
    new_member = ProjectMember.new(
      gallery_id: @project.id,
      member_id: params[:member_id],
      role: params[:role]
    )
    if new_member.save
      redirect_to project_settings_path(@project)
    else
      flash[:alert] = 'Something went wrong. Are you trying' +
        ' to add a member which already exists?'
      member = User.find(params[:member_id])
      redirect_to action: 'search', search: member.username
    end
  end

  def destroy
    @delete = ProjectMember.find(params[:id])
    if @delete.destroy
      redirect_to :back
    else
      flash[:alert] = 'Something went wrong. Please retry after some time.'
      redirect_to :back
    end
  end
end
