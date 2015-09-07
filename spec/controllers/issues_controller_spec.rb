require 'spec_helper'
include Models::ProjectMembersHelper

describe IssuesController, type: :controller do
  let(:user) { create(:user) }
  let(:project) { create(:project) }
  let(:issue) { create(:issue, project: project) }

  context 'user is guest' do
    it 'does not see new issue template' do
      get :new, user_id: project.user.username, project_id: project.name
      expect(response).not_to render_template('new')
      expect(response).to redirect_to new_user_session_path
    end

    it 'does not create new issues' do
      post :create, user_id: project.user.username,
                    project_id: project.name,
                    issue: {
                      title: 'issues title',
                      description: 'issue description',
                      tag_list: 'bug'
                    }
      expect(project.issues).to be_empty
      expect(response).to redirect_to new_user_session_path
    end
  end

  shared_examples 'has read access' do |role|
    if role
      let(:user) { create(:user) }
      before do
        issue
        project.update_attribute(:private, true)
        make_member project, user, role
        sign_in(user)
      end
    end

    it 'sees the index page' do
      get :index, user_id: project.user.username, project_id: project.name
      expect(response).to render_template('index')
    end

    it 'sees the show page' do
      get :show, user_id: project.user.username,
                 project_id: project.name,
                 id: issue.sub_id
      expect(response).to render_template('show')
    end
  end

  it_behaves_like 'has read access', nil # guest
  it_behaves_like 'has read access', 'reporter'

  context 'user is signed in' do
    before { sign_in(project.user) }

    it 'sees new issue template' do
      get :new, user_id: project.user.username, project_id: project.name
      expect(response).to render_template('new')
    end

    it 'creats new issues' do
      post :create, user_id: project.user.username,
                    project_id: project.name,
                    issue: {
                      title: 'issue title',
                      description: 'issue description',
                      tag_list: 'bug'
                    }
      expect(project.issues.first.title).to eq('issue title')
    end
  end

  shared_examples 'does not have write acess' do |role|
    before do
      issue
      make_member project, user, role unless role.nil?
      sign_in(user)
    end

    it 'does not allow user to close issue' do
      put :close, user_id: project.user.username,
                  project_id: project.name,
                  id: issue.sub_id
      issue.reload
      expect(issue.status).to eq('open')
      expect(response.response_code).to eq(403)
    end

    it 'does not allow user to reopen issue' do
      issue.close
      put :reopen, user_id: project.user.username,
                  project_id: project.name,
                  id: issue.sub_id
      expect(issue.status).to eq('closed')
      expect(response.response_code).to eq(403)
    end
  end

  it_behaves_like 'does not have write acess', nil
  it_behaves_like 'does not have write acess', 'reporter'

  shared_examples 'has write access' do |role|
    before do
      issue
      make_member project, user, role
      sign_in(user)
    end

    it 'allows user to close issue' do
      put :close, user_id: project.user.username,
                  project_id: project.name,
                  id: issue.sub_id
      issue.reload
      expect(issue.status).to eq('closed')
    end

    it 'allows user to reopen issue' do
      issue.close
      put :reopen, user_id: project.user.username,
                  project_id: project.name,
                  id: issue.sub_id
      issue.reload
      expect(issue.status).to eq('open')
    end
  end

  it_behaves_like 'has write access', 'owner'
  it_behaves_like 'has write access', 'collaborator'

  context 'user is owner of issue' do
    before do
      issue
      sign_in(issue.user)
    end

    it 'allows user to close issue' do
      put :close, user_id: project.user.username,
                  project_id: project.name,
                  id: issue.sub_id
      issue.reload
      expect(issue.status).to eq('closed')
    end

    it 'allows user to reopen issue' do
      issue.close
      put :reopen, user_id: project.user.username,
                  project_id: project.name,
                  id: issue.sub_id
      issue.reload
      expect(issue.status).to eq('open')
    end
  end
end
