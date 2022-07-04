import React from 'react';
import Header from '../component/Header';
import SearchReturn from '../component/SearchReturn';
import Loading from '../component/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      artistNames: '',
      buttonDisabled: true,
      loading: false,
      searchNames: '',
    };
  }

  handleButton = () => {
    const { artistNames } = this.state;
    const minCaracteres = 2;
    this.setState({
      buttonDisabled: artistNames.length < minCaracteres,
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      artistNames: value,
    }, this.handleButton);
  }

  handleClick = () => {
    const { artistNames } = this.state;
    this.setState({
      loading: true,
      searchNames: artistNames,
      artistNames: '',
      buttonDisabled: true,
    },
    async () => {
      this.setState({
        listOfReturnedAlbums: await searchAlbumsAPI(artistNames),
        loading: false,
      });
    });
  };

  render() {
    const { artistNames, buttonDisabled, searchNames, loading,
      listOfReturnedAlbums } = this.state;
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
            value={ artistNames }
            onChange={ this.handleChange }
          />
          <button
            data-testid="search-artist-button"
            type="submit"
            onClick={ this.handleClick }
            disabled={ buttonDisabled }
          >
            Pesquisar
          </button>
          {loading ? (
            <Loading />
          ) : (
            searchNames && (
              <div>
                <p>
                  Resultado de álbuns de:
                  {' '}
                  {searchNames}
                </p>
                <SearchReturn listOfReturnedAlbums={ listOfReturnedAlbums } />
              </div>
            )
          )}
        </form>
      </div>
    );
  }
}

export default Search;
