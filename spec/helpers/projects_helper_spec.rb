require 'spec_helper'
include FileHelper

describe ProjectsHelper, type: :helper do
  let(:project) { create(:project) }
  let(:user1) { create(:user) }
  let(:user2) { create(:user) }
  let(:user3) { create(:user) }

  describe '#nested_projects' do
    before do
      (@child1 = project.create_fork_project).user = user1
      @child1.save
      (@child2 = project.create_fork_project).user = user2
      @child2.save
      (@child3 = project.create_fork_project).user = user3
      @child2.save
      @child2.destroy
    end

    it 'makes project network with deleted nodes' do
      network = helper.nested_projects([project], project)
      expect(network).to include(
        project.name,
        @child1.name,
        @child2.name,
        @child3.name
      )
    end
  end

  describe 'file type and log' do
    before do
      add_image project, 'happypanda.png'
      add_image project, 'naruto.png'
    end

    describe '#find_file_types' do
      it 'returns hash of all image types count' do
        hash = helper.find_file_types project
        expect(hash.first[1]).to eq(2)
      end
    end

    describe '#commit_count' do
      it 'returns number of commits' do
        expect(helper.commit_count(project, 'master')).to eq(2)
      end
    end
  end
end
