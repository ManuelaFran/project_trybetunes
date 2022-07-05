import PropTypes from 'prop-types';
import React from 'react';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class CheckFavorites extends React.Component {
  constructor() {
    super();

    this.state = {
      isFavorite: false,
      loading: false,
    };
  }

  onFavoriteClick = async (isFavorite) => {
    const { trackInfo } = this.props;
    const toggle = isFavorite ? removeSong : addSong;
    this.setState({ loading: true });
    await toggle(trackInfo);
    this.setState({ loading: false, isFavorite: !isFavorite });
  }

  render() {
    const { trackInfo: { trackId } } = this.props;
    const { isFavorite, loading } = this.state;

    return (
      loading
        ? <Loading loading={ loading } />
        : (
          <label
            htmlFor={ `favorite-checkbox-${trackId}` }
            data-testid={ `checkbox-music-${trackId}` }
          >
            Favorita
            <input
              type="checkbox"
              name="favorite"
              id={ `favorite-checkbox-${trackId}` }
              checked={ isFavorite }
              onChange={ () => {
                this.onFavoriteClick(isFavorite);
              } }
            />
          </label>));
  }
}

CheckFavorites.propTypes = {
  trackInfo: PropTypes.shape({
    trackId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    trackName: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default CheckFavorites;
