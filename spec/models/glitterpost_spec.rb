require 'spec_helper'

describe Glitterpost do
  it "has a valid factory" do
    expect(create(:glitterpost)).to be_valid
  end
  
end

