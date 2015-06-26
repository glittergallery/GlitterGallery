require 'spec_helper'

describe 'ProjectMember' do
  it 'has a valid factory' do
    expect(create(:project_member)).to be_valid
  end

  it 'is invalid for undefined roles' do
    expect(build(:project_member, role: 'rap_god')).to_not be_valid
  end

  it 'is invalid for duplicate entries' do
    pm = create(:project_member)
    expect(build(
      :project_member,
      member_id: pm.member_id,
      gallery_id: pm.gallery_id
    )).to_not be_valid
  end

  describe '.add_owner' do
    let(:project) { create(:project) }
    it 'adds user as owner' do
      ProjectMember.add_owner project, project.user
      expect(ProjectMember.last.member_id).to eq(project.user_id)
    end
  end

  describe '.write_acess' do
    before do
      @project = create(:project)
      @user = create(:user)
    end

    shared_examples 'has write acess roles' do |role|
      before do
        create(
          :project_member,
          member: @user,
          member_project: @project,
          role: role
        )
      end
      it "true for #{role}" do
        expect(ProjectMember.write_acess @project, @user).to be_truthy
      end
    end

    it_behaves_like 'has write acess roles', 'owner'
    it_behaves_like 'has write acess roles', 'collaborator'

    shared_examples 'does not have write acess' do |role|
      before do
        create(
          :project_member,
          member: @user,
          member_project: @project,
          role: role
        )
      end if role
      it "false for #{role}" do
        expect(ProjectMember.write_acess @project, @user).to be_falsey
      end
    end

    it_behaves_like 'does not have write acess', 'reporter'
    it_behaves_like 'does not have write acess', nil
  end

  describe '.member?' do
    before do
      @project = create(:project)
      @user = create(:user)
    end

    shared_examples 'it is member' do |role|
      before do
        create(
          :project_member,
          member: @user,
          member_project: @project,
          role: role
        )
      end
      it "true for #{role}" do
        expect(ProjectMember.member? @project, @user).to be_truthy
      end
    end

    it_behaves_like 'it is member', 'owner'
    it_behaves_like 'it is member', 'collaborator'
    it_behaves_like 'it is member', 'reporter'

    it 'returns false non existent members' do
      expect(ProjectMember.member? @project, @user).to be_falsey
    end
  end
end
