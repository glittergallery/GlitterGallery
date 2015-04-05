require 'spec_helper'

describe Issue do
  it 'has a valid factory' do
    expect(FactoryGirl.create(:issue)).to be_valid
  end

  it 'is invalid without a title' do
    expect(FactoryGirl.build(:issue, title: '')).to_not be_valid
  end

  it 'is invalid without a description' do
    expect(FactoryGirl.build(:issue, description: '')).to_not be_valid
  end

  it 'is invalid without a type' do
    expect(FactoryGirl.build(:issue, type: nil)).to_not be_valid
  end

  it 'is invalid without a status' do
    expect(FactoryGirl.build(:issue, status: nil)).to_not be_valid
  end

  it 'is invalid without a user' do
    expect(FactoryGirl.build(:issue, user: nil)).to_not be_valid
  end

  it 'is invalid without a description' do
    expect(FactoryGirl.build(:issue, description: nil)).to_not be_valid
  end

  it 'determines if an issue is open' do
    issue = FactoryGirl.create(:issue)
    expect(issue.open?).to be_truthy
    issue.update_attributes(status: 1)
    expect(issue.open?).to be_falsey
  end

  it 'prints status text' do
    issue = FactoryGirl.create(:issue)
    expect(issue.status_text).to eq('OPEN')
    issue.update_attributes(status: 1)
    expect(issue.status_text).to eq('CLOSED')
  end

  it 'closes and reopens an issue' do
    issue = FactoryGirl.create(:issue)
    issue.close
    expect(issue.status).to eq(1)
    issue.reopen
    expect(issue.status).to eq(0)
  end

  it 'prints type text' do
    issue = FactoryGirl.create(:issue)
    expect(issue.type_text).to eq('Bug')
    issue.update_attributes(type: 1)
    expect(issue.type_text).to eq('Improvement')
  end

  it 'shows url' do
    issue = FactoryGirl.create(:issue)
    real_path = "/#{issue.project.user.username}/#{issue.project.name}/issues/1"
    expect(issue.show_url).to eq(real_path)
  end

  describe 'multiple projects' do
    before :each do
      @issue1 = FactoryGirl.create(:issue)
      @issue2 = FactoryGirl.create(:issue, project: @issue1.project)
      @p2_issue = FactoryGirl.create(:issue)
    end

    it 'prints a friendly text' do
      friendly_text = 'Issue #1 of testproject'
      expect(@issue1.friendly_text).to eq(friendly_text)
      expect(@p2_issue.friendly_text).to eq(friendly_text)
      friendly_text = 'Issue #2 of testproject'
      expect(@issue2.friendly_text).to eq(friendly_text)
    end

    it 'has sub_id' do
      expect(@issue1.sub_id).to eq(1)
      expect(@issue2.sub_id).to eq(2)
      expect(@p2_issue.sub_id).to eq(1)
    end

    it 'finds issue given project and sub_id' do
      p1 = @issue1.project
      found = p1.issues.find_by_sub_id(1)
      expect(found.id).to eq(@issue1.id)
      found = p1.issues.find_by_sub_id(2)
      expect(found.id).to eq(@issue2.id)
      p2 = @p2_issue.project
      found = p2.issues.find_by_sub_id(1)
      expect(found.id).to eq(@p2_issue.id)
    end
  end
end
