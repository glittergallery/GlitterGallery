require 'spec_helper'

describe ProjectsController, type: :controller do
  describe "GET #new" do
    context "user logged in" do
      before do
        @user = FactoryGirl.create(:user)
        sign_in(@user)
      end
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
      before do
        @project = FactoryGirl.create(:project)
        sign_in(@project.user)
      end
      it "deletes the project" do
        delete :destroy, id: @project.id
        expect(Project.where(:id => @project.id)).to be_empty
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
      before do
        @user = FactoryGirl.create(:user)
        sign_in(@user)
      end
      it "creates project" do
        post :create, :project => {:name => "testproject"}, :params => {:commit => "Public"}
        @user.reload
        expect(@user.projects).to_not be_empty
        expect(@user.projects.first.name).to eq("testproject")
        expect(response).to redirect_to(@user.projects.first.urlbase)
      end
      it "redirects to project url" do
        post :create, :project => {:name => "testproject"}, :params => {:commit => "Public"}
        expect(response).to redirect_to(@user.projects.first.urlbase)
      end
    end
    context "private project" do
      before do
        @user = FactoryGirl.create(:user)
        sign_in(@user)
      end
      it "creates project" do
        post :create, :project => {:name => "testproject"}, :params => {:commit => "Private"}
        @user.reload
        expect(@user.projects).to_not be_empty
        expect(@user.projects.first.name).to eq("testproject")
        expect(response).to redirect_to(@user.projects.first.urlbase)
      end
      it "redirects to project url" do
        post :create, :project => {:name => "testproject"}, :params => {:commit => "Public"}
        expect(response).to redirect_to(@user.projects.first.urlbase)
      end
    end
  end
  describe "GET #show" do
    before do
      @project = FactoryGirl.create(:project)
    end
    it "renders show template" do
      get :show, :user_id => @project.user.username, :id => @project.name
      expect(response).to render_template("show")
    end
    it "renders 404 if not found" do
      get :show, { id: 'not_existing_page_321' }
      expect(response.status).to eq(404)
    end
  end
end
