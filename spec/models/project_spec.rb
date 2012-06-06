require 'spec_helper'

describe Project do
  def dirpath
    File.join '..', 'data', 'repos', 'test@example.com'
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

  it 'returns the update time of its last updated glimage' do
    project = FactoryGirl.create(:project_with_glimages)
    glimage = project.glimages.order('updated_at DESC').first
    project.last_updated.should eql glimage.updated_at
  end

  it 'sets its repo path' do
    project = FactoryGirl.create(:project)
    path = File.join '..', 'data', 'repos', project.user.email, project.name
    project.path.should == path
  end

  it 'initializes a repo at its path' do
    path = File.join dirpath, 'inittest'
    project = project_with_custom_path path
    gitpath = File.join project.path, '.git'
    File.exists?(gitpath).should be_true
  end

  it 'fails to initialize a repo at an existing path' do
    path = File.join dirpath, 'existtest'
    unless File.exists? path
      Dir.mkdir(path)
    end
    File.exists?(path).should be_true
    project = project_with_custom_path path
    gitpath = File.join path, '.git'
    File.exists?(gitpath).should be_false
    Dir.delete path
  end
end
