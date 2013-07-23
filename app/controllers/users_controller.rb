def show
  @user = User.find(params[:id])
end

def new
  @user = User.new
end

def create
  @user = User.new(params[:user])
  if @user.save
  	login @user
  	redirect_to dashboard_url
  else
  	render 'new'
  end
end
