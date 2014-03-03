require 'spec_helper'

#FIXME - All of these tests are failing, because Comment model doesn't have a 'belongs_to' relationship with User.

describe "Comment" do
  it 'has a valid factory' do
    expect(FactoryGirl.create(:comment)).to be_valid
  end

  it 'is invalid without a user_id' do
    expect(FactoryGirl.build(:comment, user_id: nil)).to_not be_valid
  end

  it 'is invalid without a body' do
    expect(FactoryGirl.build(:comment, body: nil)).to_not be_valid
  end
  
  it 'is invalid without a issue check' do
    expect(FactoryGirl.build(:comment, issue?: nil)).to_not be_valid
  end
end

