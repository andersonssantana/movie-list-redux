import React from 'react';

class Movie extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, translation, year, poster } = movie;
    return (
        <div className='movie-card'>
          <p className='movie-title'>{translation}</p>
          <p className='movie-subtitle'>{title}</p>
          <p className='movie-title'>{year}</p>
          <img className='movie-image' src={poster} alt={`Poster for ${title}`} />
        </div>
    );
  }
}

export default Movie;