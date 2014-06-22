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
  	expect(@project.path).to_not eq(nil)
  end
  it "creates repositories after creation" do
  	@project = FactoryGirl.create(:project)
  	expect(File.exists?(@project.path)).to be true
  	expect(Rugged::Repository.new(File.join @project.path , 'repo.git')).to be_a(Rugged::Repository)
  	expect(Rugged::Repository.new(File.join @project.path , 'satellite' , '.git')).to be_a(Rugged::Repository)
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