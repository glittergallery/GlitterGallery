require 'spec_helper'

describe "Project" do
  def dirpath
    File.join 'public', 'data', 'repos', 'test@example.com'
  end

  def project_with_custom_path(path)
    p = FactoryGirl.build :project
    p.path = path
    p.save
    p
  end

  it 'has a valid factory' do
    FactoryGirl.create(:project).should be_valid
  end
  
  it 'is invalid without a name' do
    FactoryGirl.build(:project, name: nil).should_not be_valid
  end

  it 'sets its repo path' do
    project = FactoryGirl.create(:project)
    path = File.join 'public', 'data', 'repos', project.user.email, project.name
    project.path.should == path
  end

  describe 'creates a repo' do

    context 'if path does not exist' do
      it 'initializes a repo' do
        path = File.join dirpath, 'inittest'
        project = project_with_custom_path path
        gitpath = File.join project.path, '.git'
        File.exists?(gitpath).should be_true
      end
    end

    context 'if path does exist' do
      before do
        @path = File.join dirpath, 'existtest'
        FileUtils::mkdir_p(@path) unless File.exists? @path
        # just a quick check to make sure this
        # spec works as expected
        File.exists?(@path).should be_true
        @project = project_with_custom_path(@path)
        @gitpath = File.join @path, '.git'
      end

      it 'does not initialize a repo at an existing path' do
        expect(File.exists?(@gitpath)).to be_false
      end

      after do
        Dir.delete(@path)
      end
    end
    
  end
end
