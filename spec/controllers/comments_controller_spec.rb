require 'spec_helper'

describe CommentsController, type: :controller do
  let(:project) { create(:project) }
  let(:user) { create(:user) }
  let(:issue) { create(:issue) }

  context 'project exists' do
    describe 'POST #create' do
      before { sign_in(project.user) }

      it 'adds comment to project' do
        xhr :post, :create, comment: { polycomment_type: 'project',
                                       polycomment_id: project.id,
                                       issue: false,
                                       body: 'heads are cool'
                                     },
                            project_id: project.name,
                            user_id: project.user.username

        expect(response.response_code).to eq(200)
        expect(project.user.comments.first.body).to eq('heads are cool')
      end

      context 'polling for new comments' do
        render_views
        before do
          @comment1 = create(:comment, polycomment_type: 'project',
                                       polycomment_id: project.id)
          @comment2 = create(:comment, polycomment_type: 'project',
                                       polycomment_id: project.id)
        end
        it 'fetches new comments' do
          xhr :get, :index, project_id: project.name,
                            user_id: project.user.username,
                            polycomment_type: 'project',
                            polycomment_id: project.id,
                            after: @comment1.id

          expect(response.response_code).to eq(200)
          expect(response.body).to include(@comment2.body)
        end
      end

      context 'save fails' do
        before do
          allow_any_instance_of(Comment).to receive(:save).and_return(false)
          @request.env['HTTP_REFERER'] = 'http://test.host/keys'
        end
        it 'does not add comment' do
          xhr :post, :create, comment: { polycomment_type: 'project',
                                       polycomment_id: project.id,
                                       issue: false,
                                       body: 'heads are cool'
                                       },
                              project_id: project.name,
                              user_id: project.user.username
          expect(flash[:alert]).to be_present
          expect(project.user.comments).to be_empty
        end
      end
    end
  end

  context "project doesn't exists" do
    before { sign_in(user) }

    describe 'POST #create' do
      it "doesn't create new comment" do
        xhr :post, :create, comment: { polycomment_type: 'project',
                                       polycomment_id: 10_000,
                                       issue: false,
                                       project_name: "Dosesn't exists",
                                       body: 'Rock paper scissors'
                                     },
                            project_id: project.name,
                            user_id: project.user.username
        expect(response.response_code).to eq(404)
        expect(user.comments).to be_empty
      end
    end
  end

  context 'issue exists' do
    describe 'POST #create' do
      before { sign_in(issue.user) }

      it 'adds comment to project' do
        xhr :post, :create, comment: { polycomment_type: 'issue',
                                       polycomment_id: issue.id,
                                       issue: false,
                                       project_name: issue.project.name,
                                       body: 'I am body of comment'
                                     },
                            project_id: issue.project.name,
                            user_id: issue.project.user.username

        expect(issue.user.comments.first.body).to eq('I am body of comment')
      end
    end
  end

  context "issue doesn't exists" do
    before { sign_in(user) }

    describe 'POST #create' do
      it "doesn't create new comment" do
        xhr :post, :create, comment: { polycomment_type: 'issue',
                                       polycomment_id: 10_000,
                                       issue: false,
                                       project_name: "Dosesn't exists",
                                       body: 'I never existed'
                                     },
                            project_id: project.name,
                            user_id: project.user.username

        expect(response.response_code).to eq(404)
        expect(user.comments).to be_empty
      end
    end
  end

  context 'user is not logged in' do
    describe 'GET #new' do
      it 'redirects to sign in page' do
        get :new, project_id: project.name, user_id: project.user.username
        expect(response).to redirect_to new_user_session_path
      end
    end

    describe 'POST #create' do
      it 'does not add comment' do
        xhr :post, :create, comment: { polycomment_type: 'project',
                                       polycomment_id: project.id,
                                       issue: false,
                                       project_name: project.name,
                                       body: 'heads are cool'
                                     },
                            project_id: project.name,
                            user_id: project.user.username

        expect(Comment.all).to be_empty
        expect(response.response_code).to eq(401) # unauthorized access
      end
    end
  end

  context 'user is not owner of comment' do
    before do
      @owner = create(:user, username: 'owner')
      @comment = create(:comment, user: @owner)
      sign_in(user)
    end

    describe 'DELETE #destroy' do
      it "doesn't deletes the comment" do
        @request.env['HTTP_REFERER'] = 'http://test.host'
        delete :destroy, id: @comment.id,
                         project_id: project.name,
                         user_id: project.user.username
        expect(response.response_code).to eq(403)
        expect(@owner.comments.first.body).to eq('fancy comment body')
      end
    end
  end

  context 'user is owner of comment' do
    before do
      @comment = create(:comment, user: user)
      sign_in(user)
    end

    describe 'DELETE #destroy' do
      before { @request.env['HTTP_REFERER'] = 'http://test.host/keys' }
      it 'deletes the comment' do
        delete :destroy, id: @comment.id,
                         project_id: project.name,
                         user_id: project.user.username
        expect(user.comments).to be_empty
      end

      context 'destroy fails' do
        before do
          allow_any_instance_of(Comment).to receive(:destroy).and_return(false)
        end

        it 'does not remove comment' do
          delete :destroy, id: @comment.id,
                           project_id: project.name,
                           user_id: project.user.username
          expect(flash[:alert]).to be_present
          expect(user.comments).not_to be_empty
        end
      end
    end
  end
end
