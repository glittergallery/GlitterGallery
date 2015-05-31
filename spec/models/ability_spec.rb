require 'spec_helper'
require 'cancan/matchers'

describe 'User' do
  describe 'Abilities' do
    subject(:ability){ Ability.new(user) }
    let(:user){ nil }
    context 'when user is a guest' do
      let(:comment) { create(:comment) }
      let(:issue) { create(:issue) }
      let(:project) { create(:project) }

      it{ should be_able_to(:index, Project) }
      it{ should be_able_to(:show, project) }
      it{ should be_able_to(:blob, project) }
      it{ should be_able_to(:network, project) }
      it{ should be_able_to(:branches, project) }
      it{ should be_able_to(:commits, project) }
      it{ should be_able_to(:commit, project) }
      it{ should be_able_to(:tree, project) }
      it{ should be_able_to(:index, Issue) }
      it{ should be_able_to(:show, issue) }
      it{ should_not be_able_to(:create, Project) }
      it{ should_not be_able_to(:follow, project) }
      it{ should_not be_able_to(:fork, project) }
      it{ should_not be_able_to(:create, Comment) }
      it{ should_not be_able_to(:destroy, comment) }
      it{ should_not be_able_to(:create, Comment) }
      it{ should_not be_able_to(:reopen, issue) }
      it{ should_not be_able_to(:close, issue) }
    end

    context 'when user is not owner' do
      let(:user) { create(:user) }
      let(:user2) { create(:user) }
      let(:project) { create(:project, user: user2) }
      let(:comment) { create(:comment, user: user2)}
      let(:issue) { create(:issue, user: user2)}

      it{ should be_able_to(:create, Project) }
      it{ should be_able_to(:follow, project) }
      it{ should be_able_to(:unfollow, project) }
      it{ should be_able_to(:fork, project) }
      it{ should be_able_to(:new, Comment) }
      it{ should be_able_to(:create, Comment) }
      it{ should be_able_to(:create, Issue) }
      it{ should_not be_able_to(:file_upload, project) }
      it{ should_not be_able_to(:settings, project) }
      it{ should_not be_able_to(:newfile, project) }
      it{ should_not be_able_to(:create_directory, project) }
      it{ should_not be_able_to(:create_branch, project) }
      it{ should_not be_able_to(:destroy, project) }
      it{ should_not be_able_to(:update, project) }
      it{ should_not be_able_to(:file_update, project) }
      it{ should_not be_able_to(:destroy, comment) }
      it{ should_not be_able_to(:reopen, issue) }
      it{ should_not be_able_to(:close, issue) }

      pending 'pull request'
    end

    context 'when user is owner' do
      let(:user) { create(:user) }
      let(:project) { create(:project, user: user) }
      let(:comment) { create(:comment, user: user) }
      let(:issue) { create(:issue, user: user) }

      it{ should be_able_to(:file_upload, project) }
      it{ should be_able_to(:settings, project) }
      it{ should be_able_to(:newfile, project) }
      it{ should be_able_to(:create_directory, project) }
      it{ should be_able_to(:create_branch, project) }
      it{ should be_able_to(:destroy, project) }
      it{ should be_able_to(:update, project) }
      it{ should be_able_to(:file_update, project) }
      it{ should be_able_to(:destroy, comment)}
      it{ should be_able_to(:reopen, issue) }
      it{ should be_able_to(:close, issue) }

      pending 'pull request'
    end

    context 'when user is owner of project on which issue is created' do
      let(:user) { create(:user) }
      let(:project) { create(:project, user: user) }
      let(:issue) { create(:issue, project: project) }

      it{ should be_able_to(:reopen, issue) }
      it{ should be_able_to(:close, issue) }
    end
  end
end
