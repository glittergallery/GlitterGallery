require 'spec_helper'

describe Issue do
  let(:issue) { create(:issue) }

  it 'has a valid factory' do
    expect(issue).to be_valid
  end

  it 'is invalid without a title' do
    expect(build(:issue, title: '')).to_not be_valid
  end

  it 'is invalid without a description' do
    expect(build(:issue, description: '')).to_not be_valid
  end

  it 'is invalid without a tag' do
    expect(build(:issue, tag_list: nil)).to_not be_valid
  end

  it 'is invalid without a status' do
    expect(build(:issue, status: nil)).to_not be_valid
  end

  it 'is invalid without a user' do
    expect(build(:issue, user: nil)).to_not be_valid
  end

  it 'is invalid without a description' do
    expect(build(:issue, description: nil)).to_not be_valid
  end

  describe '.search' do
    before do
      @issue2 = create(:issue, title: 'red solo cup', description: 'Toby')
      issue
    end

    it 'looks through the title' do
      matches = Issue.search('red')
      expect(matches).to include(@issue2)
      expect(matches).not_to include(issue)
    end

    it 'looks through the description' do
      matches = Issue.search('Toby')
      expect(matches).to include(@issue2)
      expect(matches).not_to include(issue)
    end

    it 'looks through username of poster' do
      matches = Issue.search(@issue2.user.username)
      expect(matches).to include(@issue2)
      expect(matches).not_to include(issue)
    end

    it 'perform stemming' do
      matches = Issue.search('cups')
      expect(matches).to include(@issue2)
      expect(matches).not_to include(issue)
    end

    it 'find matches with prifix' do
      matches = Issue.search('sol')
      expect(matches).to include(@issue2)
      expect(matches).not_to include(issue)
    end
  end

  it 'determines if an issue is open' do
    expect(issue.open?).to be_truthy
    issue.update_attributes(status: 1)
    expect(issue.open?).to be_falsey
  end

  it 'prints status text' do
    expect(issue.status_text).to eq('OPEN')
    issue.update_attributes(status: 1)
    expect(issue.status_text).to eq('CLOSED')
  end

  it 'closes and reopens an issue' do
    issue.close
    expect(issue.status).to eq('closed')
    issue.reopen
    expect(issue.status).to eq('open')
  end

  it 'prints type text' do
    expect(issue.tag_list.first).to eq('bug')
    issue.update_attributes(tag_list: 'improvement')
    expect(issue.tag_list.first).to eq('improvement')
  end

  it 'shows url' do
    real_path = "/#{issue.project.user.username}/#{issue.project.name}/issues/1"
    expect(issue.show_url).to eq(real_path)
  end

  it 'filters by state' do
    project = issue.project
    issue2 = create(:issue, project: project)
    expect(project.issues.status('open').count).to eq(2)
    expect(project.issues.status('closed').count).to eq(0)
    issue2.update_attributes(status: 1)
    expect(project.issues.status('closed').count).to eq(1)
    expect(project.issues.status('closed').count).to eq(1)
  end

  describe 'multiple projects' do
    before :each do
      @issue1 = create(:issue)
      @issue2 = create(:issue, project: @issue1.project)
      @p2_issue = create(:issue)
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
