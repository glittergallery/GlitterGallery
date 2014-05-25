require 'spec_helper'

describe DashboardController do
	describe "GET #index" do
		context "User is logged in" do
			context "No projects exist" do
				before do
					@user = FactoryGirl.create(:user)
					ApplicationController.any_instance.stub(:current_user).and_return(@user)
				end
				it "should redirect to new project page" do
					get :index
					expect(response).to redirect_to(new_project_path)
				end
			end
			context "Projects do exist" do
				before do
					@project = FactoryGirl.create(:project)
					ApplicationController.any_instance.stub(:current_user).and_return(@project.user)
				end
				it "should render index view" do
					get :index
					expect(response).to render_template("index")
				end
			end
		end
		context "User isn't logged in" do
			before do
				ApplicationController.any_instance.stub(:current_user).and_return(nil)
			end
			it "should redirect to login page" do
				get :index
				expect(response).to redirect_to(login_path)
			end
		end
	end
end