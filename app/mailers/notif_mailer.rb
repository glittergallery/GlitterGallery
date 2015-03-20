class NotifMailer < ActionMailer::Base
  default from: 'glittergallerytest@gmail.com'

  def notif_email(notification, victim)
    @victim = victim
    @notification = notification

    @subjecttext = notification.actor.username + notification.messageverb + \
                   notification.objectname
    mail(to: @victim.email, subject: @subjecttext)
  end
end
