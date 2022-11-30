import React from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux'
import movieList from '../data';

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'LOAD_MOVIES',
      payload: movieList
    });
  }

  render() {
    const { movies } = this.props;
    return (
        <div>
          <h1 className='page-title'>Top Movies</h1>
          <section className='app'>
          {movies.map((movie) => <Movie key={movie.id} movie={movie}/>)}
          </section>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.topMovies,
});

export default connect(mapStateToProps)(Home)
