import React from 'react';
import PropTypes from 'prop-types';
import AlbumCardLink from './AlbumCardLink';

class SearchReturn extends React.Component {
  render() {
    const { listOfReturnedAlbums } = this.props;
    if (listOfReturnedAlbums.length === 0) {
      return (<p>Nenhum álbum foi encontrado</p>);
    }
    return (
      <div>
        { listOfReturnedAlbums.map((album, index) => (
          <AlbumCardLink
            key={ index }
            artitsName={ album.artitsName }
            collectionName={ album.collectionName }
            collectionId={ album.collectionId }
          />
        ))}
      </div>
    );
  }
}

SearchReturn.propTypes = {
  listOfReturnedAlbums: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchReturn;
