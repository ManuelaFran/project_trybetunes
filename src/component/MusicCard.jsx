import React from 'react';
import PropTypes from 'prop-types';
import CheckFavorites from './CheckFavorites';

class MusicCard extends React.Component {
  render() {
    const { trackName, previewUrl, artist, trackId, artwork } = this.props;
    return (
      <div>
        <h3>{trackName}</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
        </audio>
        <CheckFavorites
          trackInfo={ { trackName,
            artist,
            previewUrl,
            trackId,
            artwork } }
        />
      </div>
    );
  }
}

MusicCard.propTypes = {
  artwork: PropTypes.string,
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  artist: PropTypes.string,
};

MusicCard.defaultProps = {
  artwork: undefined,
  artist: '',
};

export default MusicCard;
