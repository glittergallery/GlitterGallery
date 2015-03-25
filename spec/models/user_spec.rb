require 'spec_helper'

describe 'User' do
  it 'has a valid factory' do
    expect(FactoryGirl.create(:user)).to be_valid
  end

  it 'is invalid without an email address' do
    expect(FactoryGirl.build(:user, email: nil)).to_not be_valid
  end

  it 'is invalid without a correct email address' do
    expect(FactoryGirl.build(:user, email: 'wrong@email,com')).to_not be_valid
    expect(FactoryGirl.build(:user, email: 'wrong_at_email.com'))
     .to_not be_valid
    expect(FactoryGirl.build(:user, email: 'wrong.email@url.')).to_not be_valid
  end

  it 'is invalid with a duplicate email address' do
    @user = FactoryGirl.create(:user, email: 'duplicate@email.com')
    expect(FactoryGirl.build(:user, email: 'duplicate@email.com'))
      .to_not be_valid
  end

  it 'is invalid without a username' do
    expect(FactoryGirl.build(:user, username: nil)).to_not be_valid
    expect(FactoryGirl.build(:user, username: '')).to_not be_valid
  end
end
