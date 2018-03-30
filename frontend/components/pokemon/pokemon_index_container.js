import PokemonIndex from './pokemon_index';
import { connect } from 'react-redux';

import { requestAllPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  // piece of state that container subscribes to
  pokemon: Object.values(state.entities.pokemon)
});

//In place to create a function to handle async ajax request binding to
//Component
const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);


// connect(fn1, fn2)(component)
//
// 1. build props Object
// 2. passes props to the component
