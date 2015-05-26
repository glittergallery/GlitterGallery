require 'spec_helper'
require 'cancan/matchers'

describe 'User' do
  describe 'Abilities' do
    subject(:ability){ Ability.new(user) }
    let(:user){ nil }
    context 'when user is a guest' do
      pending 'ability of guest user'
    end

    context 'when user is a Signed In User' do
      let(:user) { create(:user) }
      let(:user2) { create(:user) }
      let(:project) { create(:project, user: user2) }

      it{ should be_able_to(:create, Project) }
      it{ should be_able_to(:follow, project) }
      it{ should be_able_to(:unfollow, project) }
      it{ should be_able_to(:fork, project) }
      it{ should_not be_able_to(:file_upload, project) }
      it{ should_not be_able_to(:settings, project) }
      it{ should_not be_able_to(:newfile, project) }
      it{ should_not be_able_to(:create_directory, project) }
      it{ should_not be_able_to(:create_branch, project) }
      it{ should_not be_able_to(:destroy, project) }
      it{ should_not be_able_to(:update, project) }
      it{ should_not be_able_to(:file_update, project) }

      pending 'pull request'
    end

    context 'when user is owner of project' do
      let(:user) { create(:user) }
      let(:project) { create(:project, user: user) }

      it{ should be_able_to(:file_upload, project) }
      it{ should be_able_to(:settings, project) }
      it{ should be_able_to(:newfile, project) }
      it{ should be_able_to(:create_directory, project) }
      it{ should be_able_to(:create_branch, project) }
      it{ should be_able_to(:destroy, project) }
      it{ should be_able_to(:update, project) }
      it{ should be_able_to(:file_update, project) }

      pending 'pull request'
    end
  end
end
