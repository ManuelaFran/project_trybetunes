import React from 'react';
import PropTypes from 'prop-types';
import Header from '../component/Header';
import MusicCard from '../component/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      artist: '',
      artwork: '',
      tracks: [],
    };
  }

  componentDidMount() {
    this.getAlbumInfo();
  }

  async getAlbumInfo() {
    const { match: { params: { id } } } = this.props;

    const results = await getMusics(id);
    const songs = results.reduce((acc, song) => {
      const { trackName, previewUrl, trackId, collectionName, kind } = song;

      if (kind === 'song') {
        acc.push({ trackName, collectionName, previewUrl, trackId });
      }
      return acc;
    }, []);
    const album = results[0];
    const { collectionName, artistName, artworkUrl100 } = album;

    this.setState({
      title: collectionName,
      artist: artistName,
      artwork: artworkUrl100,
      tracks: songs,
    });
  }

  render() {
    const { title, artist, artwork, tracks } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <img src={ artwork } alt={ `Capa do álbum ${title}` } />
          <div>
            <h2 data-testid="album-name">{ title }</h2>
            <h3 data-testid="artist-name">{ artist }</h3>
          </div>
        </div>
        <div>
          { tracks.map(({ trackId, trackName, previewUrl }) => (
            <MusicCard
              key={ trackId }
              artwork={ artwork }
              trackId={ trackId }
              artist={ artist }
              trackName={ trackName }
              previewUrl={ previewUrl }
            />
          ))}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};

export default Album;
