import React, { Component } from 'react';
import estates from './estates.json';
import Curriculum from './Curriculum';
import Input from './components/Input';

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      emailErr: false,
      cpf: '',
      address: '',
      city: '',
      estate: '',
      type: '',
      curriculum: '',
      role: '',
      description: '',
      alert: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'name') {
      this.setState({ name: event.target.value.toUpperCase() });
    } else if (event.target.name === 'address') {
      this.setState({ address: event.target.value.replaceAll(/[^A-z ]/g, '') });
    } else if (event.target.name === 'email') {
      if (
        !event.target.value.match(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        )
      ) {
        this.setState({ emailErr: true });
      } else {
        this.setState({ emailErr: false });
      }
      this.setState({ email: event.target.value });
    } else {
      this.setState(() => {
        return {
          [event.target.name]: event.target.value,
        };
      });
    }
  }

  handleClear() {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: '',
      curriculum: '',
      role: '',
      description: '',
    });
  }

  handleBlur() {
    if (this.state.city.match(/^\d/)) {
      this.setState({ city: '' });
    }
  }

  handleMouseEnter() {
    if (!this.state.alert) {
      alert('Preencha com cuidado esta informação');
      this.setState({ alert: true });
    }
  }

  render() {
    return (
      <div className="container-sm">
        <fieldset>
          <legend>Informações</legend>
          <section>
            <Input
              name="name"
              label="Nome"
              value={this.state.name}
              onChange={this.handleChange}
              maxLength={40}
              required
            />
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Nome"
              maxLength={40}
              required
            />
          </section>
          <section>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="E-mail"
              maxLength={50}
              required
            />
            {this.state.emailErr ? (
              <div className="alert alert-warning my-2" role="alert">
                E-mail inválido
              </div>
            ) : (
              ''
            )}
          </section>
          <section>
            <label htmlFor="cpf" className="form-label">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              className="form-control"
              name="cpf"
              value={this.state.cpf}
              onChange={this.handleChange}
              placeholder="CPF"
              maxLength={11}
              required
            />
          </section>
          <div id="full-address" className="row g-3">
            <section className="col-md-6">
              <label htmlFor="address" className="form-label">
                Endereço
              </label>
              <input
                type="text"
                id="address"
                className="form-control"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                placeholder="Endereço"
                maxLength={200}
                required
              />
            </section>
            <section className="col">
              <label htmlFor="city" className="form-label">
                Cidade
              </label>
              <input
                type="text"
                id="city"
                className="form-control"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder="Cidade"
                maxLength={28}
                required
              />
            </section>
            <section className="col">
              <label htmlFor="state" className="form-label">
                Estado
              </label>
              <select
                id="estate"
                name="estate"
                className="form-select"
                value={this.state.state}
                onChange={this.handleChange}
                required
              >
                <option value="">Selecione</option>
                {estates.map((estate) => (
                  <option key={estate.id} value={estate.id}>
                    {estate.name}
                  </option>
                ))}
              </select>
            </section>
            <section>
              <label className="form-label">
                Tipo
                <div className="form-check">
                  <input
                    type="radio"
                    id="home"
                    name="type"
                    className="form-check-input"
                    onChange={this.handleChange}
                    value="home"
                    required
                  />
                  <label htmlFor="home" className="form-check-label">
                    Casa
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="apartment"
                    name="type"
                    className="form-check-input"
                    onChange={this.handleChange}
                    value="apartment"
                    required
                  />
                  <label htmlFor="apartment" className="form-label">
                    Apartamento
                  </label>
                </div>
              </label>
            </section>
          </div>
        </fieldset>
        <fieldset>
          <legend>Ultimo Emprego</legend>
          <section>
            <div>
              <label htmlFor="curriculum">Curriculo</label>
            </div>
            <textarea
              className="form-control"
              name="curriculum"
              value={this.state.curriculum}
              onChange={this.handleChange}
              id="curriculum"
              maxLength={1000}
              required
            ></textarea>
          </section>
          <section>
            <div>
              <label htmlFor="role">Cargo</label>
            </div>
            <textarea
              className="form-control"
              name="role"
              value={this.state.role}
              onChange={this.handleChange}
              onMouseEnter={this.handleMouseEnter}
              id="role"
              maxLength={40}
              required
            />
          </section>
          <section>
            <div>
              <label htmlFor="description">Descrição</label>
            </div>
            <textarea
              className="form-control"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              id="description"
              maxLength={500}
              required
            ></textarea>
          </section>
        </fieldset>
        <input
          type="button"
          value="Limpar"
          className="btn btn-secondary my-2"
          onClick={this.handleClear}
        />
        <Curriculum information={this.state} />
      </div>
    );
  }
}

export default Information;
