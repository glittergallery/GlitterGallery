require 'spec_helper'

describe SessionsController do
	describe "GET #new" do
		context "if user is logged in" do
			before do
				ApplicationController.any_instance.stub(:current_user).and_return(FactoryGirl.create(:user))
			end
			it "redirects to dashboard" do
				get :new
				expect(response).to redirect_to(url_for({:controller => "dashboard",:action => "index",:only_path => true}))
			end
		end
		context "if user is not logged in" do
			before do
				ApplicationController.any_instance.stub(:current_user).and_return(nil)
			end
			it "shows login/signup page" do
				get :new
				expect(response).to be_success
				expect(response.status).to eq(200)
				expect(response).to render_template("new")
			end
		end
	end
	describe "POST #create" do 
		context "if authentication is successful and user doesn't exist" do 
			before do
				@openid_identifier = "abcd"
				controller.stub!(:authenticate_with_open_id).with(@openid_identifier, required: [:email,:nickname]).and_yield(OpenIdAuthentication::Result.new(:successful), @openid_identifier, {email: "abcd@example.com",nickname: "abcdyo"})
			end
			it "shows dashboard page" do
				params = {openid_identifier: @openid_identifier}
				expect(User.count).to eq(0)
				post(:create,params)
				expect(response).to redirect_to(dashboard_path)				
			end
			it "creates new user" do
				params = {openid_identifier: @openid_identifier}
				expect(User.count).to eq(0)
				post(:create,params)
				expect(User.count).to eq(1)
			end
		end
		context "if authentication is successful and user does" do 
			before do
				@user = FactoryGirl.create(:user)
				@openid_identifier = @user.identity_url
				controller.stub!(:authenticate_with_open_id).with(@openid_identifier, required: [:email,:nickname]).and_yield(OpenIdAuthentication::Result.new(:successful), @openid_identifier, {email: @user.email,nickname: @user.username})
			end
			it "redirects to dashboard" do
				params = {openid_identifier: @openid_identifier}
				expect(User.count).to eq(1)
				post(:create,params)
				#post(:create,params)
				expect(response).to redirect_to(dashboard_path)
				expect(User.count).to eq(1)
				#expect(User.last.email).to eq("abcd@example.com")				
			end
			it "doesn't create a new user" do
				params = {openid_identifier: @openid_identifier}
				expect(User.count).to eq(1)
				post(:create,params)
				expect(User.count).to eq(1)			
			end
		end
		context "if authentication is unsuccessful" do
			before do
				@openid_identifier = "abcd"
				controller.stub!(:authenticate_with_open_id).with(@openid_identifier,required: [:email,:nickname]).and_yield(OpenIdAuthentication::Result.new(:failed), @openid_identifier, nil)
			end
			it "shows login/signup page" do
				params = {openid_identifier: @openid_identifier}
				post(:create,params)
				expect(response).to redirect_to(login_path)
			end
		end
	end
	describe "DELETE #destroy" do
		context "if user is logged in" do
			before do
				ApplicationController.any_instance.stub(:current_user).and_return(FactoryGirl.create(:user))
			end
			it "redirects to login page" do
				delete :destroy
				expect(response).to redirect_to(login_path)
			end			
		end
		context "if user is not logged in" do
			before do
				ApplicationController.any_instance.stub(:current_user).and_return(nil)
			end
			it "redirects to login page" do
				delete :destroy
				expect(response).to redirect_to(login_path)
			end
		end
	end
end