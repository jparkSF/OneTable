Rails.application.routes.draw do
  
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :restaurants, only: [:create, :show, :index]
    resource :session, only: [:show, :create, :destroy]
  end
end
