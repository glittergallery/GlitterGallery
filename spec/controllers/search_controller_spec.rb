require 'spec_helper'

describe SearchController, type: :controller do
  let(:project) { create(:project) }
  context 'user searches website' do
    describe 'GET #search' do
      it 'renders website search template' do
        get :website_search, search: 'something'
        expect(response).to render_template('website_show')
      end
    end
  end

  context 'user searches project' do
    describe 'GET #search' do
      it 'renders project search template' do
        get :project_search, search: 'something',
                             user_id: project.user.username,
                             project_id: project.name
        expect(response).to render_template('project_show')
      end
    end
  end
end
