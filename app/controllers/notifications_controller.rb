class NotificationsController < ApplicationController
  before_filter :authenticate_user!

  def count
    @count = NotificationStatus.where(
      victim: current_user,
      seen: [false, nil]
    ).count
  end

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
    check_redirect(notificationstatus.notification.redirect_url)
  end

  private
  def check_redirect(url)
    redirect_to url if URI.parse(url).path
    rescue URI::InvalidURIError
      redirect_to '/'
  end
end
