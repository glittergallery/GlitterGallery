Glitter::Application.routes.draw do

  get "users/show"

  resources :projects, :glimages, :comments, :usera
  resource :session, only: [:new, :create, :destroy]

  get 'login' => 'sessions#new'
  get 'logout' => 'sessions#destroy'

  get 'dashboard/' => 'dashboard#index', :as => :dashboard
  get 'projects/:id/invite.xml' => 'projects#invite'

  root :to => 'sessions#new'

end
