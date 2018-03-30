@pokemon.each do |pokemon|
  json.set! pokemon.id do
    json.partial! "api/pokemon/pokemon", pokemon: pokemon
    json.image_url asset_path(pokemon.image_url)
  end
end
