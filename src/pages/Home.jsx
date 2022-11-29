import React from 'react';
import Movie from '../components/Movie';
import movies from '../data';

class Home extends React.Component {
  render() {
    return (
        <div>
          <h1 className='page-title'>Home</h1>
          <section className='app'>
          {movies.map((movie) => <Movie key={movie.id} movie={movie}/>)}
          </section>
        </div>
    );
  }
}

export default Home;
