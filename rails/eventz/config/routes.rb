Rails.application.routes.draw do
  root "events#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "events" => "events#index"
  get "events/:id" => "events#show", as: "event"
end
