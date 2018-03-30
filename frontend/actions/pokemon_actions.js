import * as APIUtil from '../util/api_util';
export const CATCH_ALL_POKEMONS = 'CATCH_ALL_POKEMONS';
export const CATCH_SINGLE_POKEMON = 'CATCH_SINGLE_POKEMON';


export const receiveAllPokemons = pokemon => {
  return {
    type: CATCH_ALL_POKEMONS,
    pokemon
  };
};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.catchAllPokemons()
    .then(pokemon => dispatch(receiveAllPokemons(pokemon)))
);

export const receiveSinglePokemon = payload => {
  return {
    type: CATCH_SINGLE_POKEMON,
    payload
  };
};

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtil.catchSinglePokemon(id)
    .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
);
