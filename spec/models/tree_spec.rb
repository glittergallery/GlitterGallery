require 'spec_helper'
include FileHelper

describe 'Tree' do
  let(:project) { create(:project) }
  let(:user) { create(:user) }
  let(:tree) { Tree.new(project) }

  describe '#traverse' do
    before do
      add_readme project
      add_image project, 'happypanda.png'
      project.create_directory(
        'master',
        '',
        'dir_name',
        user.git_author_params
      )
      @readme, @images, @dir = tree.traverse
    end

    it 'finds the readme in given tree' do
      expect(@readme).not_to be_nil
    end

    it 'finds all the images in given tree' do
      expect(@images.first[:name]).to eq('happypanda.png')
    end

    it 'finds all the directories/sub-trees in given tree' do
      expect(@dir.first[:name]).to eq('dir_name')
    end
  end
end
