import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Movie from '../components/Movie';
import movieList from '../data';

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
      <div>
        <h1 className="page-title">Top Movies</h1>
        <section className="app">
          {movies.map((movie) => <Movie key={ movie.id } movie={ movie } />)}
        </section>
      </div>
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
