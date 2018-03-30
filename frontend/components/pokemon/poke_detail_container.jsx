import PokeDetail from './pokemon_detail';
import { connect } from 'react-redux';

import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => ({
  // piece of state that container subscribes to
  pokemon: state.entities.pokemon[ownProps.match.params.id]
});

//In place to create a function to handle async ajax request binding to
//Component
const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeDetail);
