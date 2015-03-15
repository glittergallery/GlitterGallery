require 'spec_helper'
require "cancan/matchers"

describe ProjectsController, type: :controller do
  describe "GET #new" do
    context "user logged in" do
      before_do(:user, false) #Macro

      it "redirects to dashboard" do
        get :new
        expect(response).to render_template("new")
      end
    end
    context "not logged in" do
      it "redirects to login" do
        get :new
        expect(response).to redirect_to(new_user_session_path)
      end
    end
  end

  describe "DELETE #destroy" do
    context "user owns the project" do
      before_do(:project, false) #Macro

      it "deletes the project" do
        delete :destroy, id: @fact_obj.id
        expect(Project.where(:id => @fact_obj.id)).to be_empty
        expect(response).to redirect_to(dashboard_path)
      end
    end
    context "user doesn't own the project" do
      before do
        @project = FactoryGirl.create(:project)
        sign_in(FactoryGirl.create(:user,:username => "some other user",:email => "abcd@gmail.com"))
      end
      it "deletes the project" do
        delete :destroy, id: @project.id
        expect(Project.find(@project.id)).to eq(@project)
        expect(response).to redirect_to(@project.urlbase)
      end
    end
  end

  describe "POST #create" do
    context "public project" do
      before_do(:user, false) #Macro

      it "creates project" do
        post :create, :project => {:name => "testproject"}, :params => {:commit => "Public"}
        @fact_obj.reload
        expect(@fact_obj.projects).to_not be_empty
        expect(@fact_obj.projects.first.name).to eq("testproject")
        expect(response).to redirect_to(@fact_obj.projects.first.urlbase)
      end
      it "redirects to project url" do
        post :create, :project => {:name => "testproject"}, :params => {:commit => "Public"}
        expect(response).to redirect_to(@fact_obj.projects.first.urlbase)
      end
    end
    context "private project" do
      before_do(:user, false) #Macro

      it "creates project" do
        post :create, :project => {:name => "testproject"}, :params => {:commit => "Private"}
        @fact_obj.reload
        expect(@fact_obj.projects).to_not be_empty
        expect(@fact_obj.projects.first.name).to eq("testproject")
        expect(response).to redirect_to(@fact_obj.projects.first.urlbase)
      end
      it "redirects to project url" do
        post :create, :project => {:name => "testproject"}, :params => {:commit => "Public"}
        expect(response).to redirect_to(@fact_obj.projects.first.urlbase)
      end
    end
  end

  describe "GET #show" do
    before_do(:project, false) #Macro

    it "renders show template" do
      get :show, :username => @fact_obj.user.username, :project => @fact_obj.name
      expect(response).to render_template("show")
    end
  end

  describe "GET #update" do
    context "user owns the project image" do
      before_do(:project, false) #Macro
    
      it "can update the project image" do
        expect(@fact_obj).to be_a Project
      end
    end

    context "user doesn't own the project image" do
      before do
        @project = FactoryGirl.create(:project)
        @user = sign_in(FactoryGirl.create(:user, :username => "some other user",:email => "abcd@gmail.com"))
      end
      it "can not update the project image" do
        expect(@user).not_to eq(@project.user)
        expect(response.status).to eq(200)
      end
    end

  end



end
