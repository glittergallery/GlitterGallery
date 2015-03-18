require 'spec_helper'

describe CommentsController, type: :controller do
  context "project exists" do
    describe "POST #create" do
      before do
        @project = FactoryGirl.create(:project)
        sign_in(@project.user)
      end
      it 'Response code is 200' do
        xhr :post, :create, comment: { polycomment_type: "project", polycomment_id: @project.id, issue: false, project_name: @project.name, body: "heads are cool"}
        expect(response.response_code).to eq(200)
        expect(@project.user.comments.first.body).to eq("heads are cool")
      end
    end
  end

  context "project doesn't exists" do
    describe "POST #create" do
      it 'redirects to root_url' do
        xhr :post, :create, comment: { polycomment_type: "project", polycomment_id: 3, issue: false, project_name: "Dosesn't exists", body: "Rock paper scissors"}
        expect(response).to redirect_to(root_url)
      end
    end
  end
end