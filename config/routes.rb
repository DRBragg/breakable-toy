Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'

  resources :videos, only: [:index, :new, :create]
end
