# Rails.application.routes.draw do
#   get 'providers/index'
#   get 'providers/import'
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

#   resources :providers do
#     collection { post :import }
#   end

#   root to: "providers#index"
# end


Rails.application.routes.draw do

  get 'providers/import'

  namespace :api do
    namespace :v1 do
      resources :providers do
        collection { post :import }
      end
    end
  end
  
end
