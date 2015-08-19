require 'spec_helper'
include Models::ProjectMembersHelper

describe Gg::GitAccess do
  let(:user)    { create(:user) }
  let(:project) { create(:project, private: true) }
  let(:access) { Gg::GitAccess.new(user, project) }

  context 'user is member' do
    describe 'push' do
      shared_examples 'has write access' do |role|
        before { make_member project, user, role }
        it 'returns true' do
          response = access.check('git-receive-pack')
          expect(response.status).to be_truthy
        end
      end

      it_behaves_like 'has write access', 'collaborator'
      it_behaves_like 'has write access', 'owner'

      context 'does not have write access' do
        before { make_member project, user, 'reporter' }
        it 'returns false' do
          response = access.check('git-receive-pack')
          expect(response.status).to be_falsey
        end
      end
    end

    describe 'pull' do
      shared_examples 'has read access' do |role|
        before { make_member project, user, role }
        it 'returns true' do
          response = access.check('git-upload-pack')
          expect(response.status).to be_truthy
        end
      end

      it_behaves_like 'has read access', 'collaborator'
      it_behaves_like 'has read access', 'owner'
      it_behaves_like 'has read access', 'reporter'
    end
  end

  context 'user is not member' do
    it 'returns false for read access' do
      response = access.check('git-receive-pack')
      expect(response.status).to be_falsey
    end

    it 'returns false for write access' do
      response = access.check('git-receive-pack')
      expect(response.status).to be_falsey
    end
  end
end
