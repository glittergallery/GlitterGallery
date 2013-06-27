require 'spec_helper'

describe ConsumerController do

  describe "GET 'index'" do
    it "returns http success" do
      get 'index'
      response.should be_success
    end
  end

  describe "GET 'start'" do
    it "returns http success" do
      get 'start'
      response.should be_success
    end
  end

  describe "GET 'complete'" do
    it "returns http success" do
      get 'complete'
      response.should be_success
    end
  end

end
