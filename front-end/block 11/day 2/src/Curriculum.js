import React, { Component } from 'react';
import estates from './estates.json';

class Curriculum extends Component {
  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      estate,
      type,
      curriculum,
      role,
      description,
    } = this.props.information;
    return (
      <div className="container">
        <h1>{name}</h1>
        <h3>{role}</h3>
        <p>{email}</p>
        <p>{cpf}</p>
        <p>
          {address ? `${address}, ` : ''} {city ? `${city}, ` : ''}
          {estate
            ? `${estates.find(({id}) => id === estate).name}, `
            : ''}
          {type ? (type === 'apartment' ? 'Apartamento' : 'Casa') : ''}
        </p>
        <p>{description}</p>
        <p>{curriculum}</p>
      </div>
    );
  }
}

export default Curriculum;
