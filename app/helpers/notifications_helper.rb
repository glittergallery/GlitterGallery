module NotificationsHelper

  # prepares the notification string and keeps the view clean
  def notif_string(notification)
    notification.actor.username + notification.messageverb
  end
end
