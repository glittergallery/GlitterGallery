require 'spec_helper'

describe Comment do
  it 'has a valid factory' do
    expect(create(:comment)).to be_valid
  end

  it 'is invalid without a user_id' do
    expect(build(:comment, user_id: nil)).to have(1).errors_on(:user_id)
  end

  it 'is invalid without a body' do
    expect(build(:comment, body: nil)).to have(1).errors_on(:body)
  end
  
  it 'is invalid without a issue check' do
    expect(build(:comment, issue?: nil)).to have(1).errors_on(:issue?)
  end
  end

