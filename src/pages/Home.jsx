import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Movie from '../components/Movie';
import movieList from '../data';

import './Home.styles.css';

class Home extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'LOAD_MOVIES',
      payload: movieList,
    });
  }

  render() {
    const { movies } = this.props;
    
    return (
      <>
        <div className="home">
          <div className="overlay">
          </div>
          <div className="content">
            <header>
              <div className="buttons">
                <a href="/profile">
                  <img width={24} height={24} src="/images/user.svg" alt="" />
                </a>

                <a href="/config">
                  <img width={24} height={24} src="/images/config.svg" alt="" />
                </a>
              </div>
            </header>
            <section>
              <span className="tag">Science Fiction</span>
              <div className="stars">
                {
                  Array
                    .from({ length: 5 })
                    .map(() => (
                      <img width={16} height={16} src="/images/star.svg" alt="" />
                    ))
                }
              </div>
              <h1>Godzilla vs. Kong</h1>
              <p>
                In a time when monsters walk the Earth, humanity's fight for its 
                future sets Godzilla and Kong on a collision course that will see 
                the two most powerful forces of nature on the planet collide in a 
                spectacular battle for the ages.
              </p>
                
              <a href="/image/star.svg">
                Watch now
              </a>
            </section>
          </div>
        </div>
        <section className="movies">
          <div className="head">
            <h2>Novos filmes</h2>
          </div>

          <ul>
            {
              movies.map(movie => (
                <li>
                  <Movie movie={movie} />
                </li>
              ))
            }
          </ul>
        </section>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.topMovies,
});

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    translation: PropTypes.string,
    poster: PropTypes.string,
    year: PropTypes.string,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Home);
