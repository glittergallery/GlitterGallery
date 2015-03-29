require 'spec_helper'

describe CommentsController, type: :controller do
  context 'project exists' do
    describe 'POST #create' do
      before do
        @project = FactoryGirl.create(:project)
        sign_in(@project.user)
      end
      it 'adds comment to project' do
        xhr :post, :create, comment: { polycomment_type: 'project',
                                       polycomment_id: @project.id,
                                       issue: false,
                                       project_name: @project.name,
                                       body: 'heads are cool'
                                     }
        expect(response.response_code).to eq(200)
        expect(@project.user.comments.first.body).to eq('heads are cool')
      end
    end
  end

  context "project doesn't exists" do
    before do
      @user = FactoryGirl.create(:user)
      sign_in(@user)
    end
    describe 'POST #create' do
      it "doesn't create new comment" do
        xhr :post, :create, comment: { polycomment_type: 'project',
                                       polycomment_id: 10_000,
                                       issue: false,
                                       project_name: "Dosesn't exists",
                                       body: 'Rock paper scissors'
                                     }
        expect(response.response_code).to eq(404)
        expect(@user.comments).to be_empty
      end
    end
  end

  context 'issue exists' do
    describe 'POST #create' do
      before do
        @issue = FactoryGirl.create(:issue)
        sign_in(@issue.user)
      end
      it 'adds comment to project' do
        xhr :post, :create, comment: { polycomment_type: 'issue',
                                       polycomment_id: @issue.id,
                                       issue: false,
                                       project_name: @issue.project.name,
                                       body: 'I am body of comment'
                                     }
        expect(@issue.user.comments.first.body).to eq('I am body of comment')
      end
    end
  end

  context "issue doesn't exists" do
    before do
      @user = FactoryGirl.create(:user)
      sign_in(@user)
    end
    describe 'POST #create' do
      it "doesn't create new comment" do
        xhr :post, :create, comment: { polycomment_type: 'issue',
                                       polycomment_id: 10_000,
                                       issue: false,
                                       project_name: "Dosesn't exists",
                                       body: 'I never existed'
                                     }
        expect(response.response_code).to eq(404)
        expect(@user.comments).to be_empty
      end
    end
  end


end
