require 'spec_helper'

describe Project do
  it "has a valid factory" do
    expect(FactoryGirl.create(:project)).to be_valid
  end

  it "is invalid without a name" do
    expect(FactoryGirl.build(:project,:name => nil)).to_not be_valid
  end

  it "is invalid without a user" do
    expect(FactoryGirl.build(:project,:user => nil)).to_not be_valid
  end

  it "sets path after creation" do
    @project = FactoryGirl.create(:project)
    expect(@project.data_path).to_not eq(nil)
  end

  it "creates repositories after creation" do
    @project = FactoryGirl.create(:project)
    expect(File.exists?(@project.data_path)).to be true
    expect(Rugged::Repository.new(File.join @project.data_path , 'repo.git')).to be_a(Rugged::Repository)
    expect(Rugged::Repository.new(File.join @project.data_path , 'satellite' , '.git')).to be_a(Rugged::Repository)
  end

  it "gets list of inspiring projects" do
    @project = FactoryGirl.create(:project)
    FactoryGirl.create(:project, :name => 't2', private: true, user: @project.user)
    expect(Project.inspiring_projects_for(@project.user.id).count).to eq(0)
    expect(Project.inspiring_projects_for(@project.user.id+1).count).to eq(1)
  end

  it "gets thumbnails path" do
    @project = FactoryGirl.create(:project)
    commit_id = SecureRandom.hex(20)
    real_path = "/testdata/repos/#{@project.user.email}/#{@project.name}/thumbnails/#{commit_id}"
    expect(@project.thumbnail_for(commit_id,false)).to eq(real_path)
    real_path = "public" + real_path
    expect(@project.thumbnail_for(commit_id,true)).to eq(real_path)
    expect(@project.thumbnail_for(commit_id)).to eq(real_path)
  end

  describe ".urlbase" do
    it "is correct" do
      @user = FactoryGirl.create(:user, :username => "sarup")
      @project = FactoryGirl.create(:project,:name => "testproject",:user => @user)
      expect(@project.urlbase).to eq("/sarup/testproject")
    end

    it "handles spaces properly" do
      @user = FactoryGirl.create(:user, :username => "sarup")
      @project = FactoryGirl.create(:project,:name => "test project",:user => @user)
      expect(@project.urlbase).to eq("/sarup/test%20project")
    end
  end

  describe ".barerepo" do
    it "is a valid repository" do
      @project = FactoryGirl.create(:project)
      expect(@project.barerepo).to be_a(Rugged::Repository)
    end
  end

  describe ".satelliterepo" do
    it "is a valid repository" do
      @project = FactoryGirl.create(:project)
      expect(@project.satelliterepo).to be_a(Rugged::Repository)
    end
  end
end