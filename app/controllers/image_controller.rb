class ImageController < ApplicationController

  # Upload a new image file
 def create
    logger.debug "create image"
    logger.debug params.inspect.to_yaml
    
  end

end
