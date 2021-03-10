import React from "react";

class PokemonDetail extends React.Component {

  constructor(props) {
    super(props)

  }

  render(){

    return(
      <section className="pokemon-detail">
        <h1>{this.props.pokemon.name}</h1>
        <img src={this.props.pokemon.imageUrl} />
        <ul>
          <li>No. {this.props.pokemon.id}</li>
          <li>Type: {this.props.pokemon.pokeType}</li>
          <li>Attack: {this.props.pokemon.attack}</li>
          <li>Defense: {this.props.pokemon.defense}</li>
          <li>Moves: {this.props.pokemon.moves.join(", ")}</li>
        </ul>
      </section>
    )
  }
}

export default PokemonDetail;