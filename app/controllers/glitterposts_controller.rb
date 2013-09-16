# User interacts with glitterposts through the methods defined 
# in this controller. 
# User may create multiple unique glitterposts and share them with
# others! This controller is guaranteed to require lots of improvements, 
# in the future, we may have to consider replacing this with a blogging
# system out of a good gem.

class GlitterpostsController < ApplicationController

  # New glitterposts can be created  in the glitterposts#new page. 
  # We're currently asking just for the title and content.

  def new
  end

  # Glitterpost creation is defined in the method below. We're allowing 
  # them to add a title and content to it and we're then adding them to the glitterpost 
  # list of the person who's currently logged in.

  def create
  	@glitterpost = Glitterpost.new(params[:glitterpost])
  	@glitterpost.user_id = current_user.id
  	if @glitterpost.save
  		redirect_to @glitterpost
  	else
      flash[:alert] = "Something went wrong, try glitterposting again."
  		render 'new'
  	end
  end

  # Glitterposts may be edited through this function. Title and content appears on a form
  # so they can be changed easily, the current state appearing as the current text.
  # Only authors of glitterposts are allowed to edit them.

  def edit
    @glitterpost = Glitterpost.find(params[:id])
  end

  # Used by glitterpost#edit to update glitterposts.

  def update
    @glitterpost = Glitterpost.find(params[:id])
    if @glitterpost.update_attributes(params[:glitterpost])
      redirect_to @glitterpost
    else
      render 'edit'
    end
  end

  # Used for displaying a feed of all glitterposts ever made on GlitterGallery.

  def index
  	@glitterposts = Glitterpost.all
  end
  
  # Displays the glitterposts with the specified id at /glitterposts/:id;
  # comments for the glitterpost are included. 

  def show
  	@glitterpost = Glitterpost.find(params[:id])
    @comments = Comment.where(polycomment_type: "glitterpost", polycomment_id: @glitterpost.id)
    
  end

  # Deltes a glitterposts forever. Only author is allowed to delete.

  def destroy
  	@glitterpost = Glitterpost.find(params[:id])
  	@glitterpost.destroy
  	redirect_to glitterposts_path
  end

end
