require 'spec_helper'

describe CommentsController, type: :controller do
  describe "POST #create" do
    before do
      @project = FactoryGirl.create(:project)
      sign_in(@project.user)
    end
    it 'Response code is 200' do
      xhr :post, :create, comment: { polycomment_type: "project", polycomment_id: 3, issue: false, project_name: @project.name, body: "heads are cool" }
      expect(response.response_code).to eq(200)
    end
  end
end