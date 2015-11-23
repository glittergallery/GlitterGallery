require 'spec_helper'
include Models::ProjectMembersHelper

describe ProjectMembersController, type: :controller do
  let(:project) { create(:project) }
  let(:user) { create(:user) }

  context 'user is owner of project' do
    before { sign_in(project.user) }
    it 'adds project members' do
      post :create, user_id: project.user.username,
                    project_id: project.name,
                    member_id: user.id,
                    role: 'collaborator'
      expect(response.status).to eq(302)
      expect(response)
        .to redirect_to(settings_user_project_path(project.user, project))
    end

    describe 'duplicate member' do
      before { make_member project, user }

      it 'gets notified that duplicate memebers can not be added' do
        post :create, user_id: project.user.username,
                      project_id: project.name,
                      member_id: user.id,
                      role: 'collaborator'
        expect(flash[:alert]).to be_present
        path = user_project_project_members_path(project.user, project) +
          "?search=#{user.username}"
        expect(response).to redirect_to(path)
      end
    end

    it 'does not add project members as owner' do
      post :create, user_id: project.user.username,
                    project_id: project.name,
                    member_id: user.id,
                    role: 'owner'
      expect(response.status).to eq(403)
      expect(user.member_projects).to be_empty
    end

    describe 'removes project members' do
      before { make_member project, user }
      it 'leaves user with no member_projects' do
        @request.env['HTTP_REFERER'] = 'http://test.host'
        delete :destroy, id: user.project_members.last.id
        expect(response.status).to eq(302)
        expect(user.member_projects).to be_empty
      end
    end
  end

  context 'member actions' do
    before do
      sign_in user
      @request.env['HTTP_REFERER'] = 'http://test.host'
    end

    describe 'actions allowed' do
      before { make_member project, user }
      it 'removes himself from project' do
        delete :destroy, id: user.project_members.last.id
        expect(response.status).to eq(302)
        expect(user.member_projects).to be_empty
      end
    end

    describe 'actions not allowed' do
      context 'removes other users' do
        let(:other_user) { create(:user) }
        before { make_member project, other_user }
        it 'responds with status 403' do
          delete :destroy, id: other_user.project_members.last.id
          expect(response.status).to eq(403)
          expect(other_user.member_projects).not_to be_empty
        end
      end

      context 'removes himself as owner' do
        before { make_member project, user, 'owner' }
        it 'responds with status 403' do
          delete :destroy, id: user.project_members.last.id
          expect(response.status).to eq(403)
          expect(user.member_projects).not_to be_empty
        end
      end
    end
  end
end
