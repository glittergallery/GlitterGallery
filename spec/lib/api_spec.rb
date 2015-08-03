require 'spec_helper'
include Models::ProjectMembersHelper

describe API::API, type: :request  do
  let(:user) { create(:user) }
  let(:key) { create(:key, user: user) }
  let(:project) { create(:project) }
  let(:secret_token) { '02eb56d97afc267a58e4a01e8a2f4c6a' }

  describe 'GET /internal/check', no_db: true do
    it do
      get 'api/v1/internal/check', secret_token: secret_token
      expect(response.status).to eq(200)
    end
  end

  describe 'POST /internal/allowed' do
    before do
      allow_any_instance_of(Key).to receive(:add_to_shell).and_return(true)
    end

    context 'access granted' do
      before { make_member project, user}

      context 'git pull' do
        it do
          pull(key, project)

          expect(response.status).to eq(200)
          expect(JSON.parse(response.body)['status']).to be_truthy
        end
      end

      context 'git push' do
        it do
          push(key, project)

          expect(response.status).to eq(200)
          expect(JSON.parse(response.body)['status']).to be_truthy
        end
      end
    end

    context 'access denied' do
      context 'git pull' do
        before { project.update_attribute(:private, true) }
        it do
          pull(key, project)

          expect(response.status).to eq(200)
          expect(JSON.parse(response.body)['status']).to be_falsey
        end
      end

      context 'git push' do
        it do
          push(key, project)

          expect(response.status).to eq(200)
          expect(JSON.parse(response.body)['status']).to be_falsey
        end
      end
    end
  end

  def pull(key, project)
    post(
      'api/v1/internal/allowed',
      key_id: key.id,
      project: "#{project.user.username}/#{project.name}",
      action: 'git-upload-pack',
      secret_token: secret_token
    )
  end

  def push(key, project)
    post(
      'api/v1/internal/allowed',
      changes: 'd14d6c0abdd253381df51a723d58691b2ee1ab08' +
        '570e7b2abdd848b95f2f578043fc23bd6f6fd24d refs/heads/master',
      key_id: key.id,
      project: "#{project.user.username}/#{project.name}",
      action: 'git-receive-pack',
      secret_token: secret_token
    )
  end
end
