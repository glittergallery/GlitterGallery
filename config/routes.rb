Glitter::Application.routes.draw do

  resources :users, :projects
  resource :session, only: [:new, :create, :destroy]

  resources :glimages do
    resources :comments
  end

  get '/projects/:id/commits' => 'projects#commits'
  get 'projects/:id/commit/:tree_id' => 'projects#projectcommit'
  get 'glimages/:id/history' => 'glimages#history'
  get 'glimages/:id/blob/:blob_id' => 'glimages#blob'

  resources :glitterposts do
    resources :comments
  end

  match '/login', to: 'sessions#new'
  match '/logout', to: 'sessions#destroy', via: :delete

  get 'dashboard/' => 'dashboard#index', :as => :dashboard
  get 'projects/:id/invite.xml' => 'projects#invite'
  get 'projects/:id/fork' => 'projects#fork'
  get 'projects/:id/forkyou' => 'projects#forkyou'

  root :to => 'sessions#new'

end
