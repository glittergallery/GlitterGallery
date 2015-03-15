# GlitterGallery app config goes here

# ImageMagick geometry to use for thumbnail generation
# defaults to 100 px width
# http://www.imagemagick.org/script/command-line-processing.php#geometry
Glitter::Application.config.thumbnail_geometry=[50,50]

# (gr)Avatar options
## path to default avatar - should start with slash
if Rails.env.development?
    Glitter::Application.config.default_avatar='https://raw.githubusercontent.com/glittergallery/GlitterGallery/master/public/happypanda.png'
else
    Glitter::Application.config.default_avatar='/happypanda.png'
end    
## size of gravatar to ask for - one dimension in pixels
## (gravatars are square :))
Glitter::Application.config.gravatar_size='48'

# This is the the list of auth providers to allow
# The complete list as of now is :facebook,:twitter,:open_id,:linkedIn,:github
# Don't forget to set the respective Environment variables for the auth methods. For ex, FACEBOOK_KEY and FACEBOOK_SECRET
Glitter::Application.config.auth_methods=[:facebook,:twitter,:open_id,:linkedIn,:github]

# This is the ActionMailer configuration
#
# Example Environment variables :
# MAIL_ADDRESS=smtp.gmail.com
# MAIL_PORT=587
# MAIL_DOMAIN=gmail.com
# MAIL_USERNAME=you@gmail.com
# MAIL_PASSWORD=yourpassword
# MAIL_AUTHENTICATION=plain
Glitter::Application.config.action_mailer.delivery_method = :smtp
if Rails.env.development?
  Glitter::Application.config.repo_dir="public/data"
elsif Rails.env.test?
  Glitter::Application.config.repo_dir="public/testdata"
elsif Rails.env.production?
  Glitter::Application.config.repo_dir="ENV['OPENSHIFT_DATA_DIR']/data"
  Glitter::Application.config.action_mailer.smtp_settings={
  address:              ENV["MAIL_ADDRESS"],
  port:                 ENV["MAIL_PORT"],
  domain:               ENV["MAIL_DOMAIN"],
  user_name:            ENV["MAIL_USERNAME"],
  password:             ENV["MAIL_PASSWORD"],
  authentication:       ENV["MAIL_AUTHENTICATION"],
  enable_starttls_auto: true  }
end
