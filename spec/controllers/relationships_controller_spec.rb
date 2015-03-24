require 'spec_helper'

describe RelationshipsController, type: :controller do
  context 'User is signed in' do
    describe 'follow and unfollow' do
      before do
        @user1 = FactoryGirl.create(:user)
        sign_in(@user1)
        @user2 = FactoryGirl.create(:user, email: 't@t.com', username: 'tester')
      end

      context 'HTML requests' do
        it 'allows user to follow other users' do
          post :follow, id: @user2.username
          expect(response).to redirect_to user_path(@user2)
          expect(@user2.followers.count).to eq(1)
        end

        it 'allows user to unfollow other users' do
          @user2.followers.append(@user1)
          delete :unfollow, id: @user2.username
          expect(@user2.followers.count).to eq(0)
        end
      end

      context 'JS requests' do
        it 'allows user to follow other users' do
          xhr :post, :follow, id: @user2.username
          expect(response.response_code).to eq(200)
          expect(@user2.followers.count).to eq(1)
        end

        it 'allows user to unfollow other users' do
          @user2.followers.append(@user1)
          xhr :delete, :unfollow, id: @user2.username
          expect(response.response_code).to eq(200)
          expect(@user2.followers.count).to eq(0)
        end
      end
    end
  end

  context 'User is not signed in' do
    describe 'follow' do
      before do
        @user = FactoryGirl.create(:user)
      end

      it 'redirects to sign in page for HTML requests' do
        post :follow, id: @user.username
        expect(response).to redirect_to new_user_session_path
        expect(@user.followers.count).to be(0)
      end

      it 'responds with a 401 to JS requests' do
        xhr :post, :follow, id: @user.username
        expect(response.response_code).to eq(401)
        expect(@user.followers.count).to be(0)
      end
    end
  end
end
