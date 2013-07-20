Glitter::Application.routes.draw do

  resources :users, :projects
  resource :session, only: [:new, :create, :destroy]

  resources :glimages do
    resources :comments
  end

  get '/projects/:id/commits' => 'projects#commits'
  get 'projects/:id/commit/:commit_id' => 'projects#commit'
  resources :glitterposts do
    resources :comments
  end

  match '/login', to: 'sessions#new'
  match '/logout', to: 'sessions#destroy', via: :delete

  get 'dashboard/' => 'dashboard#index', :as => :dashboard
  get 'projects/:id/invite.xml' => 'projects#invite'

  root :to => 'sessions#new'

end
