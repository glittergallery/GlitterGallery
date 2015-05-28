require 'spec_helper'

describe UsersController, type: :controller do
  render_views
  context 'user is guest' do
    before do
      @user = create(:user)
    end
    describe 'GET #show' do
      it 'renders show template' do
        get :show, id: @user.username
        expect(response).to render_template('show')
      end
      it 'assigns correct user ID' do
        get :show, id: @user.username
        expect(assigns(:user)).to eq(@user)
      end
    end
    it 'does not see followers list' do
      xhr :get, :list_followers, id: @user.username
      expect(response).not_to render_template(partial: '_followers')
      expect(response.response_code).to eq(401)
    end

    it 'does not see followings list' do
      xhr :get, :list_followings, id: @user.username
      expect(response).not_to render_template(partial: '_followings')
      expect(response.response_code).to eq(401)
    end
  end

  context 'user is logged in' do
    before do
      @user = create(:user)
      sign_in(@user)
    end

    it 'sees followers list' do
      xhr :get, :list_followers, id: @user.username
      expect(response).to render_template(partial: '_followers')
    end

    it 'sees followings list' do
      xhr :get, :list_followings, id: @user.username
      expect(response).to render_template(partial: '_followings')
    end
  end

end
