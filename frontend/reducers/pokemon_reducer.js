import { CATCH_ALL_POKEMONS, CATCH_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case CATCH_ALL_POKEMONS:
      return merge({}, state, action.pokemon);
    case CATCH_SINGLE_POKEMON:
      const newState = merge({}, state);
      const pokemon = action.payload.pokemon;
      newState[pokemon.id] = pokemon;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
