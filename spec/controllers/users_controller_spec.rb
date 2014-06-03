require 'spec_helper'

describe UsersController do
  describe "GET #show" do
    before do
      @user = FactoryGirl.create(:user)
    end
    it "renders show template" do
      get :show, :username => @user.username
      expect(response).to render_template("show")     
    end
    it "assigns correct user ID" do
      get :show, :username => @user.username
      expect(assigns(:user)).to eq(@user)
    end
  end 
end