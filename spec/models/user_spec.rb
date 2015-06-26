require 'spec_helper'

describe 'User' do
  it 'has a valid factory' do
    expect(create(:user)).to be_valid
  end

  it 'is invalid without an email address' do
    expect(build(:user, email: nil)).to_not be_valid
  end

  it 'is invalid without a correct email address' do
    expect(build(:user, email: 'wrong@email,com')).to_not be_valid
    expect(build(:user, email: 'wrong_at_email.com'))
     .to_not be_valid
    expect(build(:user, email: 'wrong.email@url.')).to_not be_valid
  end

  it 'is invalid with a duplicate email address' do
    @user = create(:user, email: 'duplicate@email.com')
    expect(build(:user, email: 'duplicate@email.com'))
      .to_not be_valid
  end

  it 'is invalid without a username' do
    expect(build(:user, username: nil)).to_not be_valid
    expect(build(:user, username: '')).to_not be_valid
  end

  describe '#owner?' do
    before do
      @user = create(:user)
    end
    context 'user is owner' do
      it 'returns true' do
        project = create(:project, user: @user)
        expect(@user.owner? project).to be_truthy
      end
    end

    context 'user is not owner' do
      it 'returns false' do
        project = create(:project)
        expect(@user.owner? project).to be_falsey
      end
    end
  end

  describe '.search' do
    let(:user1) { create(:user) }
    let(:user2) { create(:user) }
    context 'params was pased' do
      it 'returns user' do
        expect(User.search "#{user1.username}").to eq [user1]
      end
    end

    context 'params is not passed' do
      it 'returns all users' do
        expect(User.search nil).to eq [user1, user2]
      end
    end
  end
end
