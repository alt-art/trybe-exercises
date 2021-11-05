import React, { Component } from 'react';
import './Pokemon.css';
import propTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { image, type, name, averageWeight } = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <img src={image} alt={name} />
        </div>
        <h2>{name}</h2>
        <p>{type}</p>
        <p>
          Average Weight:{' '}
          {`${averageWeight.value}${averageWeight.measurementUnit}`}
        </p>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: propTypes.shape({
    image: propTypes.string.isRequired,
    id: propTypes.number,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    averageWeight: propTypes.shape({
      value: propTypes.number.isRequired,
      measurementUnit: propTypes.string.isRequired,
    }),
    moreInfo: propTypes.string,
  }).isRequired,
};

export default Pokemon;
