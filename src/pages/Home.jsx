import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Movie from '../components/Movie';
// import Header from '../components/Header';
import movieList from '../data';

import './Home.styles.css';
import { LOAD_MOVIES } from '../redux/actions/actionTypes';

class Home extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: LOAD_MOVIES,
      payload: movieList,
    });
  }

  render() {
    const { movies } = this.props;

    return (
      <section className="movies">
        <div className="head">
          <h2>Novos filmes</h2>
        </div>

        <ul>
          {
            movies.map((movie) => (
              <li key={ movie.id }>
                <Movie movie={ movie } />
              </li>
            ))
          }
        </ul>
      </section>
    );
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
