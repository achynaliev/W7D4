import React from 'react';
import PokeItem from "./pokemon_index_item";
import PokeDetailContainer from './poke_detail_container';
import { Route } from "react-router-dom";

class PokemonIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    // console.log(this.props);

    return (
      <div>
        <h1>Pokemon Index</h1>
        <ul>
          {
            this.props.pokemon.map( (poke) => <PokeItem key={poke.id} pokemon={poke}/>)
          }
        </ul>
        <Route path='/pokemon/:id' component={PokeDetailContainer}></Route>
      </div>
    );
  }
}

export default PokemonIndex;
