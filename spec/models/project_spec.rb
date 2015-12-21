require 'spec_helper'
include Models::RepositoryHelpers
include FileHelper

describe Project do
  let(:user) { create(:user) }
  let(:user1) { create(:user) }
  let(:project) { create(:project, user: user) }
  let(:repo_path) { Glitter::Application.config.repo_path }

  it 'has a valid factory' do
    expect(create(:project)).to be_valid
  end

  it 'is invalid without a name' do
    expect(build(:project, name: '')).to_not be_valid
  end

  it 'is invalid without a user' do
    expect(build(:project, user: nil)).to_not be_valid
  end

  it 'has a unique name per user' do
    project = FactoryGirl.create(:project)
    expect(build(:project, user: project.user)).to_not be_valid
  end

  it 'allows same name for different users' do
    expect(build(:project, user: user)).to be_valid
  end

  it 'allows same name per user after the first is deleted' do
    project.destroy
    expect(build(:project, user: user)).to be_valid
  end

  it 'is invalid without correct name format' do
    expect(build(:project, name: 'some name')).to_not be_valid
    expect(build(:project, name: 'some@name')).to_not be_valid
  end

  it 'is soft deleted' do
    project = create(:project)
    expect {project.destroy}.to change {Project.count}
    expect {project.destroy}.not_to change{Project.with_deleted.count}
  end

  it 'has default set of tags' do
    expect(project.tag_list).not_to be_empty
  end

  it 'sets path after creation' do
    expect(project.data_path).to_not eq(nil)
  end

  it 'creates repositories after creation' do
    expect(File.exists?(project.data_path)).to be true
    expect(Rugged::Repository.new("#{project.data_path}" + '.git'))
      .to be_a(Rugged::Repository)
    expect(Rugged::Repository.new(File.join(
      project.data_path,
      'satellite',
      '.git'
    ))).to be_a(Rugged::Repository)
  end

  describe '.search' do
    before do
      @project2 = create(:project, name: 'red_solo_cup')
      project
    end

    it 'looks through the title' do
      matches = Project.search('red')
      expect(matches).to include(@project2)
      expect(matches).not_to include(project)
    end

    it 'looks through username of owner' do
      matches = Project.search(@project2.user.username)
      expect(matches).to include(@project2)
      expect(matches).not_to include(project)
    end

    it 'perform stemming' do
      matches = Project.search('cups')
      expect(matches).to include(@project2)
      expect(matches).not_to include(project)
    end

    it 'find matches with prifix' do
      matches = Project.search('sol')
      expect(matches).to include(@project2)
      expect(matches).not_to include(project)
    end
  end

  it 'gets thumbnails path' do
    commit_id = SecureRandom.hex(20)
    real_path = "#{repo_path}/#{project.user.username}/#{project.name}/" \
                "thumbnails/#{commit_id}"
    expect(project.image_for(commit_id, 'thumbnails')).to eq(real_path)
  end

  describe 'image processing' do
    before { add_image project, 'happypanda.png' }

    describe '#image_for' do
      it 'gets desktop images path' do
        real_path = "#{repo_path}/#{project.user.username}/#{project.name}/"\
                    'inspire/desktop/happypanda.png'
        expect(project.image_for('happypanda.png', 'desktop_inspire'))
          .to eq(real_path)
      end

      it 'gets mobie images path' do
        real_path = "#{repo_path}/#{project.user.username}/#{project.name}/"\
                    'inspire/mobile/happypanda.png'
        expect(project.image_for('happypanda.png', 'mobile_inspire'))
          .to eq(real_path)
      end

      it 'gets mobile show image path' do
        real_path = "#{repo_path}/#{project.user.username}/#{project.name}/"\
                    'show_images/mobile/happypanda.png'
        expect(project.image_for('happypanda.png', 'show_image_mob'))
          .to eq(real_path)
      end

      it 'gets desktop show image path' do
        real_path = "#{repo_path}/#{project.user.username}/#{project.name}/"\
                    'show_images/desktop/happypanda.png'
        expect(project.image_for('happypanda.png', 'show_image_desk'))
          .to eq(real_path)
      end

      it 'gets show image path' do
        real_path = "#{repo_path}/#{project.user.username}/#{project.name}/"\
                    'show_images/show/happypanda.png'
        expect(project.image_for('happypanda.png', 'show'))
          .to eq(real_path)
      end
    end

    describe 'inspire images' do
      it 'generates desktop images for inspire page' do
        desk_path = project.image_for 'happypanda.png', 'desktop_inspire'
        expect(File.exists?(desk_path)).to be true
      end

      it 'generates mobile images for inspire page' do
        mob_path = project.image_for 'happypanda.png', 'mobile_inspire'
        expect(File.exists?(mob_path)).to be true
      end
    end

    describe 'project show images' do
      before { Tree.new(project).traverse }

      it 'gets generates desktop image' do
        desk_path = project.image_for 'happypanda.png', 'show_image_desk'
        expect(File.exists?(desk_path)).to be true
      end

      it 'gets generates mobile image' do
        mob_path = project.image_for 'happypanda.png', 'show_image_mob'
        expect(File.exists?(mob_path)).to be true
      end

      it 'gets generates show image' do
        show_path = project.image_for 'happypanda.png', 'show'
        expect(File.exists?(show_path)).to be true
      end
    end
  end

  describe '#urlbase' do
    it 'is correct' do
      expect(project.urlbase).to eq("/#{project.user.username}/#{project.name}")
    end
  end

  describe '#barerepo' do
    it 'is a valid repository' do
      expect(project.barerepo).to be_a(Rugged::Repository)
    end
  end

  describe '#satelliterepo' do
    it 'is a valid repository' do
      expect(project.satelliterepo).to be_a(Rugged::Repository)
    end
  end

  describe '#tree' do
    context 'empty repo' do
      it 'returns false' do
        expect(project.tree).to eq(false)
      end
    end

    context 'nonempty repo' do
      before :each do
        initialize_dummy_repo project
      end

      it 'returns false for invalid tree id' do
        expect(project.tree('1a')).to eq(false)
      end

      it 'returns false for wrong tree id' do
        expect(project.tree('4eee8aa0ea3fc32a0f3a9de626423ec0f2a4b39a'))
          .to eq(false)
      end

      it 'returns tree object for correct tree id' do
        expect(project.tree('4eee8aa0ea3fc32a0f3a9de626423ec0f2a4b39f').type)
          .to eq(:tree)
      end
    end
  end

  describe '#commit' do
    context 'empty repo' do
      it 'returns false' do
        expect(project.commit).to eq(false)
      end
    end

    context 'nonempty repo' do
      before :each do
        initialize_dummy_repo project
      end

      it 'returns false for invalid commit id' do
        expect(project.commit('1a')).to eq(false)
      end

      it 'returns false for a tree id' do
        expect(project.commit('4eee8aa0ea3fc32a0f3a9de626423ec0f2a4b39f'))
          .to eq(false)
      end

      it 'returns tree object for correct commit id' do
        expect(project.commit('16047dfc3ba3b4a8a6244dec410c0338b305a3ed').type)
          .to eq(:commit)
      end
    end
  end

  describe '#blob' do
    before { initialize_dummy_repo project }

    it 'is falsey for invalid data' do
      expect(project.blob('4', '1.png')).to be_falsey
      expect(project.blob('16047dfc3ba3b4a8a6244dec410c0338b305a3ed', '453'))
        .to be_falsey
    end

    it 'returns a blob for valid data' do
      expect(project.blob('16047dfc3ba3b4a8a6244dec410c0338b305a3ed', '1.png')
        .type).to eq(:blob)
    end
  end

  describe '#find_blob_data' do
    before { add_image project, 'happypanda.png' }

    it 'finds image data' do
      sha = project.barerepo.head.target.oid
      data = project.find_blob_data(sha, 'happypanda.png')
      expect(data.first[:name]). to eq('happypanda.png')
      expect(data.second.oid). to eq(sha)
    end
  end

  # testing private method, so delete it if fails
  describe '#copy_generated_images' do
    before do
      add_image project, 'happypanda.png'
      (@child = project.create_fork_project).user = user1
      @child.save
    end

    it 'copies mobile inspire images from parent' do
      path = File.join @child.image_for('', 'mobile_inspire'), '/*'
      expect(Dir[path]).to_not be_empty
    end

    it 'copies desktop inspire images from parent' do
      path = File.join @child.image_for('', 'desktop_inspire'), '/*'
      expect(Dir[path]).to_not be_empty
    end

    it 'copies commit thumbnails from parent' do
      path = File.join @child.image_for('', 'thumbnails'), '/*'
      expect(Dir[path]).to_not be_empty
    end
  end

end
