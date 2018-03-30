export const catchAllPokemons = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);

export const catchSinglePokemon = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  })
);
