require 'spec_helper'

describe 'sortable' do

  # helper to find the file to upload
  def upload(file_name)
    File.new("#{Rails.root}/spec/factories/files/#{file_name}")
  end

  before do
    @project1 = create(:project, name: 'new_name')
    @project2 = create(:project, created_at: '2010-05-24 21:00:57')
    @project3 = create(:project, name: 'newer_name')
  end
  describe 'most recent' do
    it 'shows most recent projects in order' do
      expect(Project.order_by('newest'))
        .to eq([@project3, @project1, @project2])
    end
  end

  context 'involves user action' do
    let(:user1) { create(:user) }
    let(:user2) { create(:user) }
    describe 'most stars' do
      before do
        @project1.rate(3.0, user1, 'stars')
        @project1.rate(4.0, user2, 'stars') # avg = 3.5
        @project2.rate(2.0, user1, 'stars')
        @project2.rate(4.0, user2, 'stars') # avg = 3.0
        @project3.rate(2.5, user1, 'stars') # avg = 2.5
      end
      it 'shows most avg stared projects in order' do
        expect(Project.order_by('stars'))
          .to eq([@project1, @project2, @project3])
      end
    end

    describe 'most followers' do
      before do
        user1.follow_project @project1
        user1.follow_project @project2
        user2.follow_project @project2
      end
      it 'shows most followed projects in order' do
        expect(Project.order_by('followers'))
          .to eq([@project2, @project1, @project3])
      end
    end

    describe 'most fork' do
      before do
        (child1 = @project1.create_fork_project).user = user1
        child1.save
        (child2 = @project2.create_fork_project).user = user1
        child2.save
        (child3 = @project3.create_fork_project).user = user2
        child3.save
        (child4 = @project3.create_fork_project).user = user1
        child4.save
      end
      it 'shows most forked projects in order' do
        expect(Project.order_by('forks').limit(3))
          .to eq([@project3, @project1, @project2])
      end
    end

    describe 'most activity' do
      before do
        create(:issue, project: @project1, status: 1)
        create(:issue, project: @project2, status: 1)
        create(:issue, project: @project3, status: 1)
        create(:issue, project: @project3, status: 1)
        create(:comment, polycomment_id: @project2.id)
      end
      it 'shows most active projects in order' do
        expect(Project.order_by('activity'))
          .to eq([@project3, @project2, @project1])
      end
    end

    describe 'last updated' do
      before do
        # Image upload
        file = [ActionDispatch::Http::UploadedFile.new(
          tempfile: upload('happypanda.png'),
          filename: 'happypanda.png'
        )]
        @project2.add_images(
          'master',
          nil,
          file,
          @project1.user.git_author_params
        )
        # Directory creation
        @project3.create_directory(
          'master',
          nil,
          'new_dir',
          @project1.user.git_author_params
        )
      end

      it 'shows last updated projects in order' do
        expect(Project.order_by('last updated'))
          .to eq([@project3, @project2, @project1])
      end
    end
  end
end
