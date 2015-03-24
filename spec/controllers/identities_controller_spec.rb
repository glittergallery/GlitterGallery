require 'spec_helper'

describe IdentitiesController, type: :controller do
  describe 'POST #create' do
    before :each do
      request.env['omniauth.auth'] = OmniAuth.config.mock_auth[:facebook]
    end
    context "Identity doesn't exist" do
      context "User doesn't exist" do
        it 'creates new user' do
          post :create, { provider: 'facebook' }
          expect(User.count).to eq(1)
        end
        it 'signs her in' do
          post :create, { provider: 'facebook' }
          expect(response).to redirect_to(dashboard_path)
        end
      end
      context 'User exists' do
        before :each do
          @user = FactoryGirl.create(:user)
        end
        it "doesn't create new user" do
          post :create, { provider: 'facebook' }
          expect(User.count).to eq(1)
        end
        it 'adds identity to user' do
          post :create, { provider: 'facebook' }
          expect(@user.identities.count).to eq(1)
        end
        it 'signs her in' do
          post :create, { provider: 'facebook' }
          expect(response).to redirect_to(dashboard_path)
        end
      end
    end
    context 'Identity exists' do
      before do
        @user = FactoryGirl.create(:user)
        @user.identities.create(
          provider: request.env['omniauth.auth']['provider'],
          uid: request.env['omniauth.auth']['uid']
        )
      end
      it 'signs the user in' do
        post :create, { provider: 'facebook' }
        expect(response).to redirect_to(dashboard_path)
      end
    end
  end
  describe 'GET #index' do
    before do
      @user = FactoryGirl.create(:user)
      sign_in(@user)
    end
    it 'renders index template' do
      get :index
      expect(response).to render_template('index')
    end
  end
  describe 'POST #destroy' do
    before do
      @user = FactoryGirl.create(:user)
      request.env['omniauth.auth'] = OmniAuth.config.mock_auth[:facebook]
      @user.identities.create(
        provider: request.env['omniauth.auth']['provider'],
        uid: request.env['omniauth.auth']['uid']
      )
      sign_in(@user)
      request.env['HTTP_REFERER'] = '/'
    end
    it 'deletes user' do
      post :destroy, { id: @user.identities.first.id }
      expect(@user.identities.count).to eq(0)
    end
  end
end
