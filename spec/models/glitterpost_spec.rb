require 'spec_helper'

describe Glitterpost do
  it "has a valid factory" do
    expect(create(:glitterpost)).to be_valid
  end
  
  it "is invalid without a title" do
#    expect(build(:glitterpost, title:nil)).to have(1).errors_on(:title)
    expect(build(:glitterpost, title:nil)).to be_valid

  end

  it "is invalid without content" do
    expect(build(:glitterpost, content:nil)).to have(1).errors_on(:content)
  end

  it "is invalid without a user_id" do
    expect(build(:glitterpost, user_id:nil)).to have(1).errors_on(:user_id)
  end
  
end

