import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Movie.styles.css';

class Movie extends React.Component {
  state = {
    edit: false,
    editionMovie: {
      id: 0,
      title: '',
      translation: '',
      year: 0,
      poster: '',
      genre: '',
    },
  };

  handleEdit = (movie) => {
    // TODO: Implementar função
    console.log(movie);
  };

  handleSave = () => {
    const { dispatch } = this.props;
    const { editionMovie } = this.state;

    // TODO: Implementar função

    console.log({
      dispatch,
      editionMovie,
    });

    this.setState({
      edit: false,
    });
  };

  handleDelete = (id) => {
    // TODO: Implementar função
    const { dispatch } = this.props;
    console.log(id, dispatch);
  };

  handleChange = ({ target }) => {
    // TODO: Implementar função
    console.log(target);
  };

  render() {
    const { movie } = this.props;
    const { title, poster, genre, year, translation, id } = movie;
    const { edit, editionMovie } = this.state;

    return (
      <div
        className="movie-card"
        style={ {
          backgroundImage: `url(${poster})`,
        } }
      >
        <div className="overlay">
          <div className="action-buttons">
            <button
              type="button"
              className="edit"
              onClick={ edit ? this.handleSave : () => this.handleEdit(movie) }
            >
              <img src={ `/images/${edit ? 'save' : 'edit'}.svg` } alt="" />
            </button>
            <button
              type="button"
              className="delete"
              disabled={ edit }
              onClick={ () => this.handleDelete(id) }
            >
              <img src="/images/close.svg" alt="" />
            </button>
          </div>
          {
            edit ? (
              <form>
                <label htmlFor="translation">
                  <input
                    type="text"
                    name="translation"
                    id="translation"
                    value={ editionMovie.translation }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="title">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={ editionMovie.title }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="year">
                  <input
                    type="text"
                    name="year"
                    id="year"
                    value={ editionMovie.year }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="genre">
                  <input
                    type="text"
                    name="genre"
                    id="genre"
                    value={ editionMovie.genre }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="poster">
                  <input
                    type="text"
                    name="poster"
                    id="poster"
                    value={ editionMovie.poster }
                    onChange={ this.handleChange }
                  />
                </label>
              </form>
            ) : (
              <div className="content">
                <h3>{ translation }</h3>

                <div className="bottom">
                  <span className="tag">{ genre }</span>
                  <div className="year">
                    { year }
                  </div>
                  <h3>{ title }</h3>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    translation: PropTypes.string,
    poster: PropTypes.string,
    year: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Movie);
