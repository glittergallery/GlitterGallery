Glitter::Application.routes.draw do

  resources :projects
  resource :session, only: [:new, :create, :destroy]
  resources :comments, only: [:new, :create, :destroy]
  resources :glitterposts

  get '/dashboard' => 'dashboard#index', :as => :dashboard
  get '/:username' => 'users#show'

  get '/:username/:project' => 'projects#show'
  get '/:username/:project/commits' => 'projects#commits'
  get '/:username/:project/commit/:tree_id' => 'projects#commit'
  get '/:username/:project/master/:image_name' => 'projects#masterbranch', :image_name => /[^\/]*/
  get '/:username/:project/master/:image_name/:history' => 'projects#file_history', :image_name => /[^\/]*/
  get '/:username/:project/createsvg' => 'projects#new_svg'
  get '/:username/:project/newfile' => 'projects#newfile'
  get '/:username/:project/master/:image_name/edit' => 'projects#edit_svg', :image_name => /[^\/]*/
  get '/:username/:project/master/:image_name/update' => 'projects#update', :image_name => /[^\/]*/
  get '/:username/:project/fork' => 'projects#fork'
  get '/:username/:project/forkyou' => 'projects#forkyou'
  get '/:username/:project/pull' => 'projects#pull_request'
  get '/:username/:project/pull/:pull_id' => 'projects#pull'
  get '/:username/:project/pull/:pull_id/merge' => 'projects#merge'
  get '/:username/:project/pull/:pull_id/close' => 'projects#close'
  get '/:username/:project/pull/:pull_id/open' => 'projects#open'
  get '/:username/:project/pulls' => 'projects#pulls'


  post 'glitterposts/:id/edit' => 'glitterposts#update'

  get 'projects/:id/:xid' => 'projects#show'
  get 'projects/:id/:xid/commits' => 'projects#commits'
  get 'projects/:id/:xid/commit/:tree_id' => 'projects#projectcommit'
  get 'projects/:id/:xid/masterbranch/:image_name' => 'projects#masterbranch', :image_name => /[^\/]*/
  get 'projects/:id/:xid/masterbranch/:image_name/history' => 'projects#file_history', :image_name => /[^\/]*/
  get 'projects/:id/:xid/createsvg' => 'projects#new_svg'
  get 'projects/:id/:xid/newfile' => 'projects#newfile'
  get 'projects/:id/:xid/masterbranch/:image_name/edit' => 'projects#edit_svg', :image_name => /[^\/]*/
  get 'projects/:id/:xid/masterbranch/:image_name/update' => 'projects#update', :image_name => /[^\/]*/
  get 'projects/:id/:xid/fork' => 'projects#fork'
  get 'projects/:id/:xid/forkyou' => 'projects#forkyou'
  get 'projects/:id/:xid/pull' => 'projects#pull_request'
  get 'projects/:id/:xid/pull/:pull_id' => 'projects#pull'
  get 'projects/:id/:xid/pull/:pull_id/merge' => 'projects#merge'
  get 'projects/:id/:xid/pull/:pull_id/close' => 'projects#close'
  get 'projects/:id/:xid/pull/:pull_id/open' => 'projects#open'
  get 'projects/:id/:xid/pulls' => 'projects#pulls'

  
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

  
  get '/login' => 'sessions#new'
  match '/logout', to: 'sessions#destroy', via: :delete


  root :to => 'sessions#new'
end
