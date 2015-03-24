require 'spec_helper'

describe ProjectFollower do
  before :each do
    @project = FactoryGirl.create(:project)
    @user = FactoryGirl.create(:user, email: 't@t.com', username: 'tester')
  end

  it 'makes a user follow a project' do
    ProjectFollower.make_follow @user, @project
    expect(@user.followed_projects.include?(@project)).to eq(true)
  end

  it "makes a user unfollow a project if he's a follower" do
    @user.followed_projects << @project
    @user.save
    expect(ProjectFollower.remove_follow @user, @project).to eq(true)
    expect(@user.followed_projects.include?(@project)).to eq(false)
  end

  it "responds when a user unfollows a project that he didn't follow" do
    expect(ProjectFollower.remove_follow @user, @project).to eq(false)
    expect(@user.followed_projects.include?(@project)).to eq(false)
  end

  it 'checks if a user followed a project' do
    expect(ProjectFollower.following?(@user, @project)).to eq(false)
    @user.followed_projects << @project
    @user.save
    expect(ProjectFollower.following?(@user, @project)).to eq(true)
  end
end
