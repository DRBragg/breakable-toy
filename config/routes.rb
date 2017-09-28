Rails.application.routes.draw do
  root "videos#index"

  devise_for :users, controllers: { registrations: 'users'}

  resources :videos, only: [:index, :show] do
    resources :comments
  end

  resources :sessions, only: [:show, :create, :destroy]

  resources :users, only: [:create, :show] do
    resources :videos, only: [:new, :create, :destroy]
  end
end
