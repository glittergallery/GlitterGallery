require 'spec_helper'
include Models::ProjectMembersHelper

describe ProjectsController, type: :controller do

  # helper to find the file to upload
  def upload(file_name)
    File.new("#{Rails.root}/spec/factories/files/#{file_name}")
  end

  context 'user is guest' do
    let(:project) { create(:project) }

    it 'does not see new project page' do
      get :new
      expect(response).not_to render_template('show')
      expect(response).to redirect_to new_user_session_path
    end

    it 'does not create new projects' do
      post :create, project: { name: 'newproject' },
                    params: { commit: 'Public' }
      expect(Project.exists?(name: 'newproject')).to be false
      expect(response).to redirect_to new_user_session_path
    end

    it 'does not follow projects' do
      post :follow, user_id: project.user.username, id: project.name
      expect(project.followers.count).to eq(0)
      expect(response).to redirect_to new_user_session_path
    end

    it 'does not fork the projects' do
      post :fork, user_id: project.user.username, id: project.name
      expect(Project.all.count).to eq(1)
      expect(response).to redirect_to new_user_session_path
    end
  end

  shared_examples 'has read access' do |role|
    if role
      let(:project) { create(:project, private: true) }
      let(:user) { create(:user) }
      before do
        make_member project, user, role
        sign_in(user)
      end
    else
      let(:project) { create(:project) }
      let(:user) { nil }
    end

    it 'sees the index page' do
      get :index
      expect(response).to render_template('index')
    end

    describe 'GET #show' do
      it 'renders show template' do
        get :show, user_id: project.user.username, id: project.name
        expect(response).to render_template('show')
      end

      it 'renders 404 if not found' do
        get :show, { id: 'not_existing_page_321' }
        expect(response.status).to eq(404)
      end
    end

    context 'actions after file upload' do
      before do
        file = [ActionDispatch::Http::UploadedFile.new(
          tempfile: upload('happypanda.png'),
          filename: 'happypanda.png'
        )]
        project.add_images(
          'master',
          nil,
          file,
          project.user.git_author_params
        )
        @commit = project.branch_commit nil
      end

      it 'sees the log of the project' do
        get :commits, user_id: project.user.username, id: project.name
        expect(response).to render_template('commits')
      end

      it 'sees the changes in the commits' do
        get :commit, user_id: project.user.username,
                     id: project.name,
                     commit_id: @commit.oid
        expect(response).to render_template('commit')
      end

      it 'browses the project at any point in history' do
        get :tree, user_id: project.user.username,
                   id: project.name,
                   oid: @commit.oid
        expect(response).to render_template('show')
      end
    end

    it 'sees the network of the project' do
      get :network, user_id: project.user.username, id: project.name
      expect(response).to render_template('network')
    end

    it 'sees the branches of the project' do
      get :branches, user_id: project.user.username, id: project.name
      expect(response).to render_template('branches')
    end
  end

  it_behaves_like 'has read access', nil # guest
  it_behaves_like 'has read access', 'reporter'

  context 'user is signed in' do
    describe 'allows new, create and show actions' do
      before do
        @user = create(:user)
        sign_in(@user)
      end

      it 'sees new project page' do
        get :new
        expect(response).to render_template('new')
      end

      describe 'can create new projects' do
        context 'public project' do
          it 'creates project' do
            post :create, project: { name: 'testproject' },
                          params: { commit: 'Public' }
            @user.reload
            expect(@user.projects).to_not be_empty
            expect(@user.projects.first.name).to eq('testproject')
            expect(response).to redirect_to(@user.projects.first.urlbase)
          end

          it 'redirects to project url' do
            post :create, project: { name: 'testproject' },
                          params: { commit: 'Public' }
            expect(response).to redirect_to(@user.projects.first.urlbase)
          end
        end

        context 'private project' do
          it 'creates project' do
            post :create, project: { name: 'testproject' },
                          params: { commit: 'Private' }
            @user.reload
            expect(@user.projects).to_not be_empty
            expect(@user.projects.first.name).to eq('testproject')
            expect(response).to redirect_to(@user.projects.first.urlbase)
          end

          it 'redirects to project url' do
            post :create, project: { name: 'testproject' },
                          params: { commit: 'Public' }
            expect(response).to redirect_to(@user.projects.first.urlbase)
          end
        end
      end
    end

    describe 'Follow and unfollow projects' do
      before :each do
        @project = create(:project)
      end

      it "makes a user follow a project if it's not his" do
        user = create(:user, email: 't@t.com', username: 'tester')
        sign_in(user)
        post :follow, user_id: @project.user.username, id: @project.name
        expect(response).to redirect_to(user_project_path(
          @project.user,
          @project)
        )
        expect(user.followed_projects.include?(@project)).to eq(true)
      end

      it "doesn't allow a user to follow his own projects" do
        user = @project.user
        sign_in(user)
        post :follow, user_id: user.username, id: @project.name
        expect(response).to redirect_to(user_project_path(
          @project.user,
          @project)
        )
        expect(user.followed_projects.include?(@project)).to eq(false)
      end

      describe 'after follow' do
        before :each do
          @user = create(:user, email: 't@t.com', username: 'tester')
          @user.followed_projects << @project
          @user.save
          sign_in(@user)
        end

        it 'shows followed projects for a user' do
          get :followed_index, id: @user.username
          expect(assigns(:projects).count).to eq(1)
          expect(assigns(:projects).first).to eq(@project)
        end

        it 'allows a user to unfollow a project' do
          delete :unfollow, user_id: @project.user.username, id: @project.name
          expect(response).to redirect_to(user_project_path(
            @project.user,
            @project)
          )
          expect(@user.followed_projects.include?(@project)).to eq(false)
        end
      end
    end

    describe 'fork projects' do
      before :each do
        @project = create(:project, name: 'to_fork')
      end

      it 'allows user to fork a project' do
        user = create(:user, email: 't@t.com', username: 'tester')
        sign_in(user)
        post :fork, user_id: @project.user.username, id: @project.name
        expect(response).to redirect_to(user_project_path(
          user,
          @project)
        )
        expect(user.projects.first.name).to eq('to_fork')
      end
    end
  end

  shared_examples 'has write access' do |role|
    let(:project) { create(:project) }
    let(:user) { create(:user) }

    before do
      make_member project, user, role
      sign_in(user)
    end

    it 'allows user see settings page' do
      get :settings, user_id: project.user.username, id: project.name
      expect(response).to render_template('settings')
    end

    it 'adds directory to project' do
      post :create_directory, user_id: project.user.username,
                              id: project.name,
                              directory: 'new_dir'
      expect(project.browse_tree[1].first[:name]).to eq('new_dir')
    end

    describe 'actions afters file upload' do
      before do
        file = [ActionDispatch::Http::UploadedFile.new(
          tempfile: upload('happypanda.png'),
          filename: 'happypanda.png'
        )]
        post :file_upload, user_id: project.user.username,
                           id: project.name,
                           file: file
      end

      describe 'POST #file_upload' do
        it 'allows user to upload image' do
          expect(project.browse_tree[0].first[:name]).to eq('happypanda.png')
        end
      end

      it 'allows user to update image' do
        file = ActionDispatch::Http::UploadedFile.new(
          tempfile: upload('naruto.png'),
          filename: 'naruto.png',
          original_filename: 'happypanda.png'
        )
        post :file_update, user_id: project.user.username,
                           id: project.name,
                           branch: 'master',
                           destination: 'naruto.png',
                           message: 'update panda image',
                           file: file
        expect(project.browse_tree[0]
          .find { |h| h[:name] == 'naruto.png' }).not_to be nil
      end

      it 'allows user to create a branch' do
        post :create_branch, user_id: project.user.username,
                             id: project.name,
                             branch_name: 'new_branch',
                             commit: 'Create new branch!'
        expect(project.branch?('new_branch')).to be true
      end
    end
  end

  it_behaves_like 'has write access', 'owner'
  it_behaves_like 'has write access', 'collaborator'

  shared_examples 'does not have write acess' do |role|
    let(:project) { create(:project) }
    let(:user) { create(:user) }
    before do
      make_member project, user, role unless role.nil?
      sign_in(user)
    end

    it 'does not see settings page' do
      get :settings, user_id: project.user.username, id: project.name
      expect(response).not_to render_template('settings')
      expect(response.response_code).to eq(403)
    end

    it 'can not delete the project' do
      delete :destroy, id: project.id
      expect(Project.find(project.id)).to eq(project)
      expect(response.response_code).to eq(403)
    end

    it 'can not add directory to project' do
      post :create_directory, user_id: project.user.username,
                              id: project.name,
                              directory: 'new_dir'
      expect(project.browse_tree[1]).to be_empty
    end

    it "doesn't allow user to upload image" do
      file = [ActionDispatch::Http::UploadedFile.new(
          tempfile: upload('happypanda.png'),
          filename: 'happypanda.png'
        )]
      post :file_upload, user_id: project.user.username,
                         id: project.name,
                         file: file
      expect(project.browse_tree[0]).to be_empty
      expect(response.response_code).to eq(403)
    end

    describe 'after image upload actions' do
      before do
        file = [ActionDispatch::Http::UploadedFile.new(
          tempfile: upload('happypanda.png'),
          filename: 'happypanda.png'
        )]
        project.add_images(
          'master',
          nil,
          file,
          project.user.git_author_params
        )
      end

      it 'does not allow user to create a branch' do
        post :create_branch, user_id: project.user.username,
                             id: project.name,
                             branch_name: 'new_branch',
                             commit: 'Create new branch!'
        expect(project.branch?('new_branch')).to be false
        expect(response.response_code).to eq(403)
      end

      it 'does not allow user to update image' do
        file = ActionDispatch::Http::UploadedFile.new(
          tempfile: upload('naruto.png'),
          filename: 'naruto.png',
          original_filename: 'happypanda.png'
        )
        post :file_update, user_id: project.user.username,
                           id: project.name,
                           branch: 'master',
                           destination: 'naruto.png',
                           message: 'update panda image',
                           file: file
        expect(project.browse_tree[0]
          .find { |h| h[:name] == 'naruto.png' }).to be nil
        expect(response.response_code).to eq(403)
      end
    end
  end

  it_behaves_like 'does not have write acess', nil
  it_behaves_like 'does not have write acess', 'reporter'

  context 'user is owner of project' do
    let(:project) { create(:project) }
    before { sign_in(project.user) }

    it 'deletes the project' do
      delete :destroy, id: project.id
      expect(Project.where(id: project.id)).to be_empty
      expect(response).to redirect_to(dashboard_path)
    end
  end
end
