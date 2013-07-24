class GlitterpostsController < ApplicationController
  def new
  	# spit out the new glitterpost form
    # asks for title and content
  end

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

  def edit
    @glitterpost = Glitterpost.find(params[:id])
  end

  def update
    @glitterpost = Glitterpost.find(params[:id])
    if @glitterpost.update_attributes(params[:glitterpost])
      redirect_to @glitterpost
    else
      render 'edit'
    end
  end

  def index
  	@glitterposts = Glitterpost.all
  end

  def show
  	@glitterpost = Glitterpost.find(params[:id])
    @polycomment = @glitterpost
    @comments = @polycomment.comments
    @comment = Comment.new
  end

  def destroy
  	@glitterpost = Glitterpost.find(params[:id])
  	@glitterpost.destroy
  	redirect_to glitterposts_path
  end

end
