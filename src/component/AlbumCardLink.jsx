import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumCardLink extends React.Component {
  render() {
    const { collectionId, collectionName, artistName } = this.props;
    return (
      <div>
        <p>{ artistName }</p>
        <p>{ collectionName }</p>
        <NavLink
          data-testid={ `link-to-album-${collectionId}` }
          to={ `album/${collectionId}` }
        >
          {collectionId}
        </NavLink>
      </div>
    );
  }
}

AlbumCardLink.propTypes = {
  collectionId: PropTypes.number,
  artistName: PropTypes.string,
  collectionName: PropTypes.string,
}.isRequired;

export default AlbumCardLink;
