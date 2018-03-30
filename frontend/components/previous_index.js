import React from 'react';

class PokemonIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = { pokemon: {} };
  }

  componentWillMount() {
    const catchAllPokemons = () => (
      $.ajax({
        method: 'GET',
        url: 'api/pokemon'
      })
    );

    catchAllPokemons().then((data) => {
      this.setState({pokemon: data});
    });
  }

  render() {
    // console.log(this.state);
    const pokemon = Object.values(this.state.pokemon);
    console.log(pokemon);

    const pokemonList = pokemon.map(poke => <li key={poke.id}>{poke.name}</li>);

    return (
      <div>
        <h1>Pokemon Index</h1>
        <ul>
          {pokemonList}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
