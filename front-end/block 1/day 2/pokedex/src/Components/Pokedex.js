import React, { Component } from 'react';
import pokeData from '../data';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <div className="pokedex">
        {pokeData.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
