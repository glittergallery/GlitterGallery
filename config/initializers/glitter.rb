# Glitter gallery app config goes here

# ImageMagick geometry to use for thumbnail generation
# defaults to 100 px width
# http://www.imagemagick.org/script/command-line-processing.php#geometry
Glitter::Application.config.thumbnail_geometry="150x110!"

# (gr)Avatar options
## path to default avatar - should start with slash
Glitter::Application.config.default_avatar='/happypanda.png'
## size of gravatar to ask for - one dimension in pixels 
## (gravatars are square :))
Glitter::Application.config.gravatar_size='48'
