require 'spec_helper'

describe RaterController, type: :controller do
  describe 'POST #rate' do
    before do
      @user = FactoryGirl.create(:user)
      @project = FactoryGirl.create(:project)
      sign_in(@user)
    end
    it 'adds rating to project' do
      post :create, {
        id: @project.id,
        score: 2.0,
        dimension: 'stars',
        klass: 'Project'
      }
      expect(@project.rates('stars').count).to eq(1)
      expect(@project.rates('stars').first.stars).to eq(2)
    end
  end
end
