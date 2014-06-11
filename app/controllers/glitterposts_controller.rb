class GlitterpostsController < ApplicationController
  before_filter :store_return_to
  before_filter :authenticate_user!, except: [:show, :index]

  def new
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
    @comments = Comment.where(polycomment_type: "glitterpost", polycomment_id: @glitterpost.id)
    @comments = pg @comments, 10
    @comment = Comment.new
    @ajax = params[:page].nil? || params[:page] == 1
    
  end

  def destroy
  	@glitterpost = Glitterpost.find(params[:id])
  	@glitterpost.destroy
  	redirect_to glitterposts_path
  end

end
