import { CATCH_ALL_POKEMONS, CATCH_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case CATCH_ALL_POKEMONS:
      return action.pokemon;
    case CATCH_SINGLE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
