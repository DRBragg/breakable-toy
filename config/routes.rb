Rails.application.routes.draw do
  root "videos#index"

  # devise_for :users

  resources :videos, only: [:index, :new, :create]
  resources :sessions, only: [:create, :destroy]
end
