require 'spec_helper'

describe User do
  
  it "has a valid factory" do
    expect(FactoryGirl.create(:user)).to be_valid
  end

  it "is invalid without an identity url" do
    expect(FactoryGirl.build(:user,identity_url: nil)).to_not be_valid
  end

  it "is invalid with a duplicate identity_url" do
    before do
      @user = FactoryGirl.create(:user, identity_url:"duplicate.id.fedoraproject.org")
    end
    expect(FactoryGirl.build(:user, identity_url: "duplicate.id.fedoraproject.org")).to_not be_valid
  end

  it "is invalid without an email address" do
    expect(FactoryGirl.build(:user,email: nil)).to_not be_valid    
  end
  
  it "is invalid without a correct email address" do
    expect(FactoryGirl.build(:user,email: "wrong@email,com")).to_not be_valid
    expect(FactoryGirl.build(:user,email: "wrong_at_email.com")).to_not be_valid
    expect(FactoryGirl.build(:user,email: "wrong.email@url.")).to_not be_valid    
  end

  it "is invalid with a duplicate email address" do
    before do
      @user = FactoryGirl.create(:user, email: "duplicate@email.com")
    end
    expect(FactoryGirl.build(:user, email: "duplicate@email.com")).to_not be_valid
  end

  it "is invalid without a username" do
    expect(FactoryGirl.build(:user, username: nil)).to_not be_valid
    expect(FactoryGirl.build(:user, username: "")).to_not be_valid
  end

  describe "project associations" do
    before :each do
      @generated_user = FactoryGirl.create(:user)
      @older_project = FactoryGirl.create(:project, user: @generated_user, created_at: 1.day.ago)
      @newer_project = FactoryGirl.create(:project, user: @generated_user, created_at: 1.hour.ago)
    end

    it "should have the projects in the right order" do
      expect(@generated_user.projects).to eq [@older_project,@newer_project]
    end

    it "should destroy a user's projects when the user is destroyed" do
      @generated_user_projects = @generated_user.projects.dup
      @generated_user.destroy
      @generated_user_projects.should_not be_empty
      @generated_user_projects.each { |project| expect(Project.find_by_id(project.id)).to be_nil }
    end

  end

end
