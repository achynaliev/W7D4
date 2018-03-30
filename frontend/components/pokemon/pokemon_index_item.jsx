import React from "react";
import { Link } from 'react-router-dom';
import { PokeDetail } from './pokemon_detail';

class PokeItem extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   <PokeDetail id={this.props.pokemon.id}/>;
  // }



  render() {
    return (
      <li>
        <Link to={`/pokemon/${this.props.pokemon.id}`}>
          <img src={this.props.pokemon.imageUrl} />{this.props.pokemon.name}
        </Link>
      </li>
    );
  }
}

export default PokeItem;
