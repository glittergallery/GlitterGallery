require 'spec_helper'

describe RelationshipsController, type: :controller do
  context "User is signed in" do
    describe "follow and unfollow" do
      before do
        @user1 = FactoryGirl.create(:user)
        sign_in(@user1)
        @user2 = FactoryGirl.create(:user, email: "t@t.com", username: "tester")
      end

      it "allows user to follow other users" do
        expect {post :follow, :id => @user2.username}.to change {@user2.followers.count}.from(0).to(1)
      end
      
      it "allows user to unfollow other users" do
        post :follow, :id => @user2.username
        expect {delete :unfollow, :id => @user2.username}.to change {@user2.followers.count}.from(1).to(0)
      end
    end
  end

  context "User is not signed in" do
    describe "follow" do
      before do
        @user = FactoryGirl.create(:user)
      end

      it "redirects to root_path" do
        post :follow, :id => @user.username
        expect(response.response_code).to eq(200)
        expect(@user.followers.count).to be(0)
        response.body.should include("window.location = '/'")
      end
    end
  end
end
