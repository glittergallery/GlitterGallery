require 'spec_helper'

describe NotificationsController, type: :controller do
  let(:user) { create(:user) }
  let(:project) { create(:project) }
  let(:notification) { create(:notification, victims: [user]) }

  context 'user is signed in' do
    before { sign_in(user) }

    describe 'GET #index' do
      it 'lists all the notification for the user' do
        get :index
        expect(response).to render_template('index')
      end
    end

    describe 'GET #show' do
      it 'redirects to notification url and marks it seen' do
        get :show, id: notification.id
        expect(notification.notification_statuses.first.seen).to be true
        expect(response).to redirect_to notification.redirect_url
      end
    end
  end

  context 'user is guest' do
    describe 'GET #index' do
      it 'redirects to sign in page' do
        get :index
        expect(response).not_to render_template('index')
        expect(response).to redirect_to new_user_session_path
      end
    end

    describe 'GET #show' do
      it 'redirects to sign in page and does not mark it seen' do
        get :show, id: notification.id
        expect(notification.notification_statuses.first.seen).to be nil
        expect(response).to redirect_to new_user_session_path
      end
    end
  end
end
