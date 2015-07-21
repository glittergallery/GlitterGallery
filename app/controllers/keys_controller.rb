class KeysController < ApplicationController
  before_filter :authenticate_user!

  def index
    @keys = current_user.keys
  end

  def new
    @key = current_user.keys.new
  end

  def create
    @key = current_user.keys.new(key_params)

    if @key.save
      redirect_to keys_path
    else
      render 'new'
    end
  end

  def destroy
    @key = current_user.keys.find(params[:id])
    if @key.destroy
      redirect_to :back
    else
      flash[:alert] = 'Something went wrong. Please retry after some time.'
      redirect_to :back
    end
  end

  private

  def key_params
    params.require(:key).permit(:title, :key)
  end
end
