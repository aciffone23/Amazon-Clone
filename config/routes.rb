Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :show, :destroy]
    get '/products/category/:category', to: 'products#index'
    resources :products, only: [:index, :show]
    resource :cart, only: [:create, :show, :update, :destroy]
    resources :reviews, only: [:create, :show, :index]
  end

  get '*path', to: 
  "static_pages#frontend_index"

end
