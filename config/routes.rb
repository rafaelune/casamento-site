Casamentosite::Application.routes.draw do
  root 'home#index'

  post "confirmation" => "home#confirmation"
end