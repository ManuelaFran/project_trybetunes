import React from 'react';
import Header from '../component/Header';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      artistName: '',
      buttonDisabled: true,
    };
  }

  handleButton = () => {
    const { artistName } = this.state;
    const minCaracteres = 2;
    this.setState({
      buttonDisabled: artistName.length < minCaracteres,
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      artistName: value,
    }, this.handleButton);
  }

  render() {
    const { artistName, buttonDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            data-testid="search-artist-input"
            id="artistName"
            name="artistName"
            type="text"
            placeholder="Nome do Artista"
            value={ artistName }
            onChange={ this.handleChange }
          />
          <button
            data-testid="search-artist-button"
            type="submit"
            onClick={ this.handleButton }
            disabled={ buttonDisabled }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
