Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :restaurants, only: [:create, :show, :index]
    resource :session, only: [:show, :create, :destroy]
    resources :favorites, only: [:index, :create, :destroy]
  end
end
