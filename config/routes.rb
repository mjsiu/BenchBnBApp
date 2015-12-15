Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:index, :create, :new, :show]
  end

  root to: "static_pages#root"
end
