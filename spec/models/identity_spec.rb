require 'spec_helper'

describe Identity do
  it 'has a valid factory' do
    expect(FactoryGirl.create(:identity)).to be_valid
  end
end
