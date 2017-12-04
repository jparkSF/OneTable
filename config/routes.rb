Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resources :restaurants, only: [:create, :show, :index]
    resource :session, only: [:show, :create, :destroy]
    resources :favorites, only: [:index, :create, :destroy, :show]
    resources :reviews, only: [:create]
  end
end
