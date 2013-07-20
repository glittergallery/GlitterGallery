Glitter::Application.routes.draw do

  resources :users, :projects
  resource :session, only: [:new, :create, :destroy]

  resources :glimages do
    resources :comments
  end

  get '/projects/:id/commits' => 'projects#commits'

  resources :glitterposts do
    resources :comments
  end

  match '/login', to: 'sessions#new'
  match '/logout', to: 'sessions#destroy', via: :delete

  get 'dashboard/' => 'dashboard#index', :as => :dashboard
  get 'projects/:id/invite.xml' => 'projects#invite'

  root :to => 'sessions#new'

end
