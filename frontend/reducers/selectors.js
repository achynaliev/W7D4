import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  const allPoke = [];
  return values(state.entities.pokemon);
  // return allPoke;
};
