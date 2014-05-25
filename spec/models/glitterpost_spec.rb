require 'spec_helper'

describe Glitterpost do
  it "has a valid factory" do
    expect(FactoryGirl.create(:glitterpost)).to be_valid
  end
  
  it "is invalid without a title" do
    expect(FactoryGirl.build(:glitterpost, title:nil)).to_not be_valid
  end

  it "is invalid without content" do
    expect(FactoryGirl.build(:glitterpost, content:nil)).to_not be_valid
  end

  it "is invalid without a user_id" do
    expect(FactoryGirl.build(:glitterpost, user_id:nil)).to_not be_valid
  end
  
end

