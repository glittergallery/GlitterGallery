require 'spec_helper'
require 'cancan/matchers'

describe 'User' do
  describe 'Abilities' do
    subject(:ability){ Ability.new(user) }
    let(:user){ nil }
    context 'when user is a guest' do
      let(:comment) { create(:comment)}

      it{ should_not be_able_to(:create, Comment)}
      it{ should_not be_able_to(:destroy, comment)}

      pending 'project abilities'
    end

    context 'when user is not owner' do
      let(:user) { create(:user) }
      let(:user2) { create(:user) }
      let(:project) { create(:project, user: user2) }
      let(:comment) { create(:comment, user: user2)}

      it{ should be_able_to(:create, Project) }
      it{ should be_able_to(:follow, project) }
      it{ should be_able_to(:unfollow, project) }
      it{ should be_able_to(:fork, project) }
      it{ should be_able_to(:new, Comment) }
      it{ should be_able_to(:create, Comment) }
      it{ should_not be_able_to(:file_upload, project) }
      it{ should_not be_able_to(:settings, project) }
      it{ should_not be_able_to(:newfile, project) }
      it{ should_not be_able_to(:create_directory, project) }
      it{ should_not be_able_to(:create_branch, project) }
      it{ should_not be_able_to(:destroy, project) }
      it{ should_not be_able_to(:update, project) }
      it{ should_not be_able_to(:file_update, project) }
      it{ should_not be_able_to(:destroy, comment) }

      pending 'pull request'
    end

    context 'when user is owner' do
      let(:user) { create(:user) }
      let(:project) { create(:project, user: user) }
      let(:comment) { create(:comment, user: user)}

      it{ should be_able_to(:file_upload, project) }
      it{ should be_able_to(:settings, project) }
      it{ should be_able_to(:newfile, project) }
      it{ should be_able_to(:create_directory, project) }
      it{ should be_able_to(:create_branch, project) }
      it{ should be_able_to(:destroy, project) }
      it{ should be_able_to(:update, project) }
      it{ should be_able_to(:file_update, project) }
      it{ should be_able_to(:destroy, comment)}

      pending 'pull request'
    end
  end
end
