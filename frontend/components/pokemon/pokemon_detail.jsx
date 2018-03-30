import React from 'react';

class PokeDetail extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.id);
  }

  render () {
    if (this.props.pokemon === undefined) {
      return "loading"
    }
    return (
      <div>
        <h4>{this.props.pokemon.name}</h4>
        <img src={this.props.pokemon.imageUrl} />

      </div>
    );
  }
}

export default PokeDetail;
