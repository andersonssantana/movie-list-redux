import React from 'react';

import './Movie.styles.css';

class Movie extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, poster, genre } = movie;

    return (
      <div 
        className="movie-card" 
        style={{ 
          backgroundImage: `url(${poster})`,
        }}
      >
        <div className="overlay">
          <div className="content">
            <span className="tag">{ genre }</span>
            <div className="stars">
              {
                Array
                  .from({ length: 5 })
                  .map(() => (
                    <img width={16} height={16} src="/images/star.svg" alt="" />
                  ))
              }
            </div>
            <h3>{ title }</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;