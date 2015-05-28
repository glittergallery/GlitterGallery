require 'spec_helper'

describe IssuesController, type: :controller do
  context 'user is guest' do
    before do
      @issue = create(:issue)
      @project = @issue.project
    end

    it 'sees the index page' do
      get :index, user_id: @project.user.username, project_id: @project.name
      expect(response).to render_template('index')
    end

    it 'sees the show page' do
      get :show, user_id: @project.user.username,
                 project_id: @project.name,
                 id: @issue.id
      expect(response).to render_template('show')
    end

    it 'does not see new issue template' do
      get :new, user_id: @project.user.username, project_id: @project.name
      expect(response).not_to render_template('new')
      expect(response).to redirect_to new_user_session_path
    end

    it 'does not create new issues' do
      post :create, user_id: @project.user.username,
                    project_id: @project.name,
                    issue: {
                      title: 'issues title',
                      description: 'issue description',
                      tag_list: 'bug'
                    }
      expect(@project.issues.last.title).not_to eq('issues title')
      expect(response).to redirect_to new_user_session_path
    end
  end

  context 'user is signed in' do
    before do
      @project = create(:project)
      sign_in(@project.user)
    end

    it 'sees new issue template' do
      get :new, user_id: @project.user.username, project_id: @project.name
      expect(response).to render_template('new')
    end

    it 'creats new issues' do
      post :create, user_id: @project.user.username,
                    project_id: @project.name,
                    issue: {
                      title: 'issue title',
                      description: 'issue description',
                      tag_list: 'bug'
                    }
      expect(@project.issues.first.title).to eq('issue title')
    end
  end

  context 'user is not owner of project or issue' do
    before do
      @project = create(:project)
      @issue = create(:issue, project: @project)
      @user = create(:user)
      sign_in(@user)
    end

    it 'does not allow user to close issue' do
      put :close, user_id: @project.user.username,
                  project_id: @project.name,
                  id: @issue.id
      @issue.reload
      expect(@issue.status).to eq('open')
      expect(response.response_code).to eq(403)
    end

    it 'does not allow user to reopen issue' do
      @issue.close
      put :reopen, user_id: @project.user.username,
                  project_id: @project.name,
                  id: @issue.id
      expect(@issue.status).to eq('closed')
      expect(response.response_code).to eq(403)
    end
  end

  context 'user is owner of project or issue' do
    before do
      @project = create(:project)
      @issue = create(:issue, project: @project)
    end

    context 'user is owner of project' do
      before do
        sign_in(@project.user)
      end

      it 'allows user to close issue' do
        put :close, user_id: @project.user.username,
                    project_id: @project.name,
                    id: @issue.id
        @issue.reload
        expect(@issue.status).to eq('closed')
      end

      it 'allows user to reopen issue' do
        @issue.close
        put :reopen, user_id: @project.user.username,
                    project_id: @project.name,
                    id: @issue.id
        @issue.reload
        expect(@issue.status).to eq('open')
      end
    end

    context 'user is owner of project' do
      before do
        sign_in(@issue.user)
      end

      it 'allows user to close issue' do
        put :close, user_id: @project.user.username,
                    project_id: @project.name,
                    id: @issue.id
        @issue.reload
        expect(@issue.status).to eq('closed')
      end

      it 'allows user to reopen issue' do
        @issue.close
        put :reopen, user_id: @project.user.username,
                    project_id: @project.name,
                    id: @issue.id
        @issue.reload
        expect(@issue.status).to eq('open')
      end
    end
  end

end
