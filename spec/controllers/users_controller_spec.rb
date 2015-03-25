require 'spec_helper'

describe UsersController, type: :controller do
  describe 'GET #show' do
    before do
      @user = FactoryGirl.create(:user)
    end
    it 'renders show template' do
      get :show, id: @user.username
      expect(response).to render_template('show')
    end
    it 'assigns correct user ID' do
      get :show, id: @user.username
      expect(assigns(:user)).to eq(@user)
    end
  end
end
