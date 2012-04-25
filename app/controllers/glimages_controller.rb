class GlimagesController < ApplicationController
  
  def show
    @glimage = Glimage.find params[:id]
  end

end
