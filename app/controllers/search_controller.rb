class SearchController < ApplicationController
  before_filter :return_context

  def show

  end

  private
  def return_context
    @user = User.find_by username: params[:user_id]
    render_404 && return if @user.blank?
    @project = Project.with_deleted.find_by user_id: @user.id,
                                            name: params[:id]
  end
end
