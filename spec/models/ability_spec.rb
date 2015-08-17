require 'spec_helper'
require 'cancan/matchers'
include Models::ProjectMembersHelper

describe 'User' do
  describe 'Abilities' do
    subject(:ability){ Ability.new(user) }

    context 'user is guest' do
      let(:user){ nil }
      let(:comment) { create(:comment) }
      let(:issue) { create(:issue) }
      let(:project) { create(:project) }

      it{ should_not be_able_to(:create, Project) }
      it{ should_not be_able_to(:follow, project) }
      it{ should_not be_able_to(:fork, project) }
      it{ should_not be_able_to(:create, Comment) }
      it{ should_not be_able_to(:destroy, comment) }
      it{ should_not be_able_to(:create, Comment) }
      it{ should_not be_able_to(:reopen, issue) }
      it{ should_not be_able_to(:close, issue) }
    end

    shared_examples 'has read access' do |role|
      let(:issue) { create(:issue) }
      if role
        let(:project) { create(:project, private: true) }
        let(:user) { create(:user) }
        before { make_member project, user, role }
      else
        let(:project) { create(:project) }
        let(:user) { nil }
      end

      it{ should be_able_to(:index, Project) }
      it{ should be_able_to(:show, project) }
      it{ should be_able_to(:blob, project) }
      it{ should be_able_to(:network, project) }
      it{ should be_able_to(:branches, project) }
      it{ should be_able_to(:commits, project) }
      it{ should be_able_to(:commit, project) }
      it{ should be_able_to(:tree, project) }
      it{ should be_able_to(:diff, project) }
      it{ should be_able_to(:file_history, project) }
      it{ should be_able_to(:index, Issue) }
      it{ should be_able_to(:show, issue) }
    end

    it_behaves_like 'has read access', nil # guest
    it_behaves_like 'has read access', 'reporter'

    context 'user is signed in but not owner' do
      let(:user) { create(:user) }
      let(:project) { create(:project) }
      let(:comment) { create(:comment) }

      it{ should be_able_to(:create, Project) }
      it{ should be_able_to(:follow, project) }
      it{ should be_able_to(:unfollow, project) }
      it{ should be_able_to(:fork, project) }
      it{ should be_able_to(:new, Comment) }
      it{ should be_able_to(:create, Comment) }
      it{ should be_able_to(:create, Issue) }
      it{ should_not be_able_to(:destroy, comment) }
    end

    shared_examples 'does not have write acess' do |role|
      let(:user) { create(:user) }
      let(:issue) { create(:issue)}
      let(:project) { create(:project) }

      before { make_member project, user, role } unless role.nil?

      it{ should_not be_able_to(:file_upload, project) }
      it{ should_not be_able_to(:settings, project) }
      it{ should_not be_able_to(:newfile, project) }
      it{ should_not be_able_to(:create_directory, project) }
      it{ should_not be_able_to(:create_branch, project) }
      it{ should_not be_able_to(:destroy, project) }
      it{ should_not be_able_to(:update, project) }
      it{ should_not be_able_to(:file_update, project) }
      it{ should_not be_able_to(:reopen, issue) }
      it{ should_not be_able_to(:close, issue) }
    end

    it_behaves_like 'does not have write acess', nil
    it_behaves_like 'does not have write acess', 'reporter'

    shared_examples 'has write access' do |role|
      let(:user) { create(:user) }
      let(:project) { create(:project) }
      let(:issue) { create(:issue, project: project) }

      before { make_member project, user, role }

      it{ should be_able_to(:file_upload, project) }
      it{ should be_able_to(:settings, project) }
      it{ should be_able_to(:newfile, project) }
      it{ should be_able_to(:create_directory, project) }
      it{ should be_able_to(:create_branch, project) }
      it{ should be_able_to(:update, project) }
      it{ should be_able_to(:file_update, project) }
      it{ should be_able_to(:reopen, issue) }
      it{ should be_able_to(:close, issue) }

      pending 'pull request'
    end

    it_behaves_like 'has write access', 'owner'
    it_behaves_like 'has write access', 'collaborator'

    context 'owner' do
      let(:user) { create(:user) }
      let(:comment) { create(:comment, user: user) }
      let(:project) { create(:project, user: user) }
      let(:issue) { create(:issue, user: user) }

      it{ should be_able_to(:destroy, project) }
      it{ should be_able_to(:destroy, comment) }
      it{ should be_able_to(:reopen, issue) }
      it{ should be_able_to(:close, issue) }
    end
  end
end
