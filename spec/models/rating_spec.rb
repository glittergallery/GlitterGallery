require 'spec_helper'

describe ProjectFollower do
  before :each do
    @project = FactoryGirl.create(:project)
    @user = FactoryGirl.create(:user, email: 't@t.com', username: 'tester')
  end

  it 'adds rating to project' do
    @project.rate(3.0, @user, 'stars')
    expect(@project.rates('stars').first.stars).to eq(3)
  end

  it 'calculates average of all ratings' do
    @project.rate(4.0, @user, 'stars')
    @user2 = FactoryGirl.create(:user)
    @project.rate(2.0, @user2, 'stars')
    expect(@project.overall_average.avg).to eq(3)
  end
end
