class NotificationsController < ApplicationController
  before_filter :authenticate_user!

  def index
    @unseennotifications = NotificationStatus.where(
      victim: current_user,
      seen: [false, nil]
    ).map(&:notification)
    @user = current_user
  end

  def show
    notificationstatus = NotificationStatus.where(
      victim: current_user,
      notification_id: params[:id]
    ).first
    notificationstatus.seen = true
    notificationstatus.save
    redirect_to(notificationstatus.notification.url)
  end
end
