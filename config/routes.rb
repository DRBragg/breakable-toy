Rails.application.routes.draw do
  root "videos#index"

  devise_for :users

  resources :videos, only: [:index, :show]
  resources :sessions, only: [:show, :create, :destroy]
  resources :users, only: [:create, :show] do
    resources :videos, only: [:new, :create]
  end
end
