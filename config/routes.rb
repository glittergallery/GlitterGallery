Glitter::Application.routes.draw do

  devise_for :users,:controllers => { :registrations => 'registrations' }
  devise_scope :user do
    root to: "devise/sessions#new"
  end
  match 'auth/:provider/callback' => "identities#create", :via => [:get,:post]
  

  resources :projects
  resources :identities, only: [:destroy,:index]
  resources :comments, only: [:new, :create, :destroy]
  resources :glitterposts
  
  post 'glitterposts/:id/edit' => 'glitterposts#update'


  get '/dashboard' => 'dashboard#index', :as => :dashboard
  get '/:username' => 'users#show'
  get '/:username/projects' => 'projects#user_show'
  get '/:username/:project' => 'projects#show'
  get '/:username/:project/commits' => 'projects#commits'
  get '/:username/:project/commit/:tree_id' => 'projects#projectcommit'
  get '/:username/:project/master/:image_name' => 'projects#masterbranch', :image_name => /[^\/]*/
  get '/:username/:project/master/:image_name/history' => 'projects#file_history', :image_name => /[^\/]*/
  get '/:username/:project/createsvg' => 'projects#new_svg'
  get '/:username/:project/newfile' => 'projects#newfile'
  get '/:username/:project/master/:image_name/edit' => 'projects#edit_svg', :image_name => /[^\/]*/
  get '/:username/:project/master/:image_name/update' => 'projects#update', :image_name => /[^\/]*/
  delete '/:username/:project/master/:image_name/delete' => 'projects#file_delete', :image_name => /[^\/]*/
  get '/:username/:project/fork' => 'projects#fork'
  get '/:username/:project/forkyou' => 'projects#forkyou'
  get '/:username/:project/pull' => 'projects#pull_request'
  get '/:username/:project/pull/:pull_id' => 'projects#pull'
  get '/:username/:project/pull/:pull_id/merge' => 'projects#merge'
  get '/:username/:project/pull/:pull_id/close' => 'projects#close'
  get '/:username/:project/pull/:pull_id/open' => 'projects#open'
  get '/:username/:project/pulls' => 'projects#pulls'
  get '/:username/:project/settings' => 'projects#settings'

  get '/:username/:project/:xid' => 'projects#show'
  get '/:username/:project/:xid/commits' => 'projects#commits'
  get '/:username/:project/:xid/commit/:tree_id' => 'projects#projectcommit'
  get '/:username/:project/:xid/master/:image_name' => 'projects#masterbranch', :image_name => /[^\/]*/
  get '/:username/:project/:xid/master/:image_name/history' => 'projects#file_history', :image_name => /[^\/]*/
  get '/:username/:project/:xid/createsvg' => 'projects#new_svg'
  get '/:username/:project/:xid/newfile' => 'projects#newfile'
  get '/:username/:project/:xid/master/:image_name/edit' => 'projects#edit_svg', :image_name => /[^\/]*/
  get '/:username/:project/:xid/master/:image_name/update' => 'projects#update', :image_name => /[^\/]*/
  delete '/:username/:project/:xid/master/:image_name/delete' => 'projects#file_delete', :image_name => /[^\/]*/
  get '/:username/:project/:xid/fork' => 'projects#fork'
  get '/:username/:project/:xid/forkyou' => 'projects#forkyou'
  get '/:username/:project/:xid/pull' => 'projects#pull_request'
  get '/:username/:project/:xid/pull/:pull_id' => 'projects#pull'
  get '/:username/:project/:xid/pull/:pull_id/merge' => 'projects#merge'
  get '/:username/:project/:xid/pull/:pull_id/close' => 'projects#close'
  get '/:username/:project/:xid/pull/:pull_id/open' => 'projects#open'
  get '/:username/:project/:xid/pulls' => 'projects#pulls'
  get '/:username/:project/:xid/settings' => 'projects#settings'

  
  resources :projects do
    member do
      get 'projects/:id/invite.xml' => 'projects#invite'
      post :file_upload
      post :file_update
      post :handle_pull_request
      post :create_svg, :as => :create_svg
      post :edit_svg, :as => :edit_svg
      post :update_svg, :as => :update_svg
    end
  end 
end
