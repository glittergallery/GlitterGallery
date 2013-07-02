require 'spec_helper'

describe User do
  
  it "has a valid factory" do
    expect(build(:user)).to be_valid
  end

  it "is valid with a unique identity_url and email, and a username" do
    expect(build(:user)).to be_valid
  end

  it "is invalid without an identity url" do
    expect(build(:user, identity_url: nil)).to have(1).errors_on(:identity_url)
  end

  it "is invalid without an email address" do
    expect(build(:user, email: nil)).to have(2).errors_on(:email)
  end
  
  it "is invalid without a correct email address" do
    expect(build(:user, email: "wrong@email,com")).to have(1).errors_on(:email)
    expect(build(:user, email: "wrong_at_email.org")).to have(1).errors_on(:email)
    expect(build(:user, email: "wrong.email@url.")).to have(1).errors_on(:email)
  end

  it "is invalid with a duplicate email address" do
    user = create(:user, email: "duplicate@email.com")
    expect(build(:user, email: "duplicate@email.com")).to have(1).errors_on(:email)
  end

  it "is invalid with a duplicate identity_url" do
    user = create(:user, identity_url:"duplicate.id.fedoraproject.org")
    expect(build(:user, identity_url: "duplicate.id.fedoraproject.org")).to have(1).errors_on(:identity_url)
  end

  it "is invalid without a username" do
    expect(build(:user, username: nil)).to have(1).errors_on(:username)
  end

  describe "project associations" do
    before :each do
      @generated_user = create(:user)
      let!(:older_project) { create(:project, user: @generated_user, created_at: 1.day.ago) } 
      let!(:newer_project) { create(:project, user: @generated_user, created_at: 1.hour.ago) }
    end

    it "should have the projects in the right order" do
      expect(@generated_user.projects).to eq [newer_project, older_project]
    end

    it "should destroy a user's projects when the user is destroyed" do
      @generated_user_projects = @generated_user.projects.dup
      @generated_user.destroy
      @generated_user_projects.should_not be_empty
      @generated_user_projects.each { |project| expect(Project.find_by_id(project.id)).to be_nil }
    end

  end

end
