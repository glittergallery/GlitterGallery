Glitter::Application.routes.draw do


  resources :users, :projects, :glimages, :comments, :glitterposts
  resource :session, only: [:new, :create, :destroy]

  match '/login', to: 'sessions#new'
  match '/logout', to: 'sessions#destroy', via: :delete

  get 'dashboard/' => 'dashboard#index', :as => :dashboard
  get 'projects/:id/invite.xml' => 'projects#invite'


  root :to => 'sessions#new'

end
