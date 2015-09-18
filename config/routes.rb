require 'api/api'

Glitter::Application.routes.draw do

  # handles git-* requests
  mount Grack::Bundle.new({
    git_path:     Glitter::Application.config.git_path,
    project_root: Glitter::Application.config.repo_path,
    upload_pack:  true,
    receive_pack: true
  }), at: '/', constraints: lambda { |request| /[-\/\w\.]+\.git\//.match(request.path_info) }, via: [:get, :post]

  # API
  API::API.logger Rails.logger
  mount API::API => '/api'

  # Web app
  post '/rate' => 'rater#create', :as => 'rate'
  devise_for :users,:controllers => { :registrations => 'registrations' }
  devise_scope :user do
    root to: 'projects#index'
  end

  match 'auth/:provider/callback' => "identities#create", :via => [:get,:post]
  match 'auth/failure' => "identities#failed_to_authenticate", :via => [:get,:post]


  resources :projects
  resources :keys, only: [:create, :index, :destroy]
  resources :identities, only: [:destroy,:index]
  resources :comments, only: [:new, :create, :destroy]
  resources :glitterposts
  resources :notifications, only: [:index, :show]
  resources :project_members, only: [:destroy]


  get '/search' => 'search#website_search'
  get '/inspire' => 'projects#index'
  get '/inspire/:sort' => 'projects#index'
  get '/dashboard' => 'dashboard#index', :as => :dashboard
  get '/:user_id/:id/master/:image_name/update' => 'projects#update', :image_name => /[^\/]*/
  delete '/:user_id/:id/master/:image_name/delete' => 'projects#file_delete', :image_name => /[^\/]*/
  get '/:user_id/:id/pull' => 'projects#pull_request'
  get '/:user_id/:id/pull/:pull_id' => 'projects#pull'
  get '/:user_id/:id/pull/:pull_id/merge' => 'projects#merge'
  get '/:user_id/:id/pull/:pull_id/close' => 'projects#close'
  get '/:user_id/:id/pull/:pull_id/open' => 'projects#open'
  get '/:user_id/:id/pulls' => 'projects#pulls'


  resources :users, only: [:show], path: '/' do
    member do
      post 'follow' => 'relationships#follow'
      delete 'unfollow' => 'relationships#unfollow'
      get 'followers' => 'users#list_followers'
      get 'followings' => 'users#list_followings'
      get 'projects' => 'users#show_projects'
      get 'search' => 'search#project_search'
      scope 'followed', as: :followed do
        get 'projects' => 'projects#followed_index'
      end
    end
    resources :projects, except: [:index], path: '/' do
      resources :issues, except: [:show], path: "(:xid)/issues" do
        member do
          put 'close'
          put 'reopen'
        end
      end
      get '(:xid)/issues/:id' => 'issues#show', constraints: { id: /\d.*/ }, as: :issue_show
      get '(:xid)/issues/:tag' => 'issues#index'
      get '(:xid)/project_members' => 'project_members#search', as: :project_members
      post '(:xid)/project_members' => 'project_members#create', as: :new_project_members
      get '(:xid)/search' => 'search#project_search', as: :search
      member do
        scope "(:xid)" do
          get :branches
          get 'commits(/:oid)' => 'projects#commits', as: :commits
          get 'commit/:commit_id' => 'projects#commit', as: :commit
          get 'tree(/:oid(/*destination))' => 'projects#tree', as: :tree, :destination => /.+/
          get 'blob/:oid/*destination' => 'projects#blob', as: :blob, :destination => /.+/
          get 'history/:oid/*destination' => 'projects#file_history', as: :history, :destination => /.+/
          get 'diff/:oid/*destination' => 'projects#diff', as: :diff, destination: /.+/
          post 'file_upload/(:branch(/*destination))' => 'projects#file_upload', as: :file_upload, :destination => /.+/
          post 'file_update/(:branch(/*destination))' => 'projects#file_update', as: :file_update, :destination => /.+/
          post 'create_directory/(:branch(/*destination))' => 'projects#create_directory', as: :create_directory, :destination => /.+/
          post :fork
          post :follow
          post :create_branch
          delete :unfollow
          get :settings
          get :network
          post :handle_pull_request
          post :create_svg, :as => :create_svg
          post :edit_svg, :as => :edit_svg
          post :update_svg, :as => :update_svg
          get '/' => 'projects#show'
        end
      end
    end
  end

  get '/:user_id/:id/:xid/commits/:tree_id' => 'projects#commits'
  get '/:user_id/:id/:xid/commit/:tree_id' => 'projects#projectcommit'
  get '/:user_id/:id/:xid/master/:image_name' => 'projects#masterbranch', :image_name => /[^\/]*/
  get '/:user_id/:id/:xid/master/:image_name/history' => 'projects#file_history', :image_name => /[^\/]*/
  get '/:user_id/:id/:xid/createsvg' => 'projects#new_svg'
  get '/:user_id/:id/:xid/newfile' => 'projects#newfile'
  get '/:user_id/:id/:xid/master/:image_name/edit' => 'projects#edit_svg', :image_name => /[^\/]*/
  get '/:user_id/:id/:xid/master/:image_name/update' => 'projects#update', :image_name => /[^\/]*/
  delete '/:user_id/:id/:xid/master/:image_name/delete' => 'projects#file_delete', :image_name => /[^\/]*/
  post '/:user_id/:id/:xid/follow' => 'projects#follow'
  get '/:user_id/:id/:xid/fork' => 'projects#fork'
  get '/:user_id/:id/:xid/forkyou' => 'projects#forkyou'
  get '/:user_id/:id/:xid/pull' => 'projects#pull_request'
  get '/:user_id/:id/:xid/pull/:pull_id' => 'projects#pull'
  get '/:user_id/:id/:xid/pull/:pull_id/merge' => 'projects#merge'
  get '/:user_id/:id/:xid/pull/:pull_id/close' => 'projects#close'
  get '/:user_id/:id/:xid/pull/:pull_id/open' => 'projects#open'
  get '/:user_id/:id/:xid/pulls' => 'projects#pulls'
  get '/:user_id/:id/:xid/settings' => 'projects#settings'
  get '/:user_id/:id/:xid/issues' => 'issues#index'
  get '/:user_id/:id/:xid/issue/:sub_id' => 'issues#show'
  get '/:user_id/:id/:xid/issues/new' => 'issues#new'
  post '/:user_id/:id/:xid/issues/new' => 'issues#create'
  put '/:user_id/:id/:xid/issue/:id/close' => 'issues#close'

end
