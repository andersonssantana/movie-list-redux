import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Movie extends React.Component {
  state = {
    edit: false,
    id: 0,
    editionMovie: {
      id: 0,
      title: '',
      translation: '',
      year: 0,
      poster: '',
    },
  };

  handleEdit = (id, movie) => {
    this.setState({
      edit: true,
      id,
      editionMovie: {
        id,
        poster: movie.poster,
        title: movie.title,
        translation: movie.translation,
        year: movie.year,
      },
    });
  };

  handleSave = () => {
    const { dispatch } = this.props;
    const { id, editionMovie } = this.state;
    dispatch({
      type: 'SAVE_MOVIE',
      id,
      payload: editionMovie,
    });
    this.setState({
      id: 0,
      edit: false,
    });
  };

  handleDelete = (id) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'DELETE_MOVIE',
      id,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({
      editionMovie: {
        ...prevState.editionMovie,
        [name]: value,
      },
    }));
  };

  render() {
    const { movie } = this.props;
    const { id, title, translation, year, poster } = movie;
    const { edit, editionMovie } = this.state;
    return (
      <div className="movie-card">
        <div className="movie-container">
          <img className="movie-image" src={ poster } alt={ `Poster for ${title}` } />
          {
            edit
              ? (
                <button
                  type="button"
                  onClick={ this.handleSave }
                >
                  Salvar

                </button>
              ) : (
                <button
                  type="button"
                  onClick={ () => this.handleEdit(id, movie) }
                >
                  Editar

                </button>)
          }
          <button
            type="button"
            disabled={ edit }
            onClick={ () => this.handleDelete(id) }
          >
            Deletar

          </button>
        </div>
        {
          edit
            ? (
              <div className="movie-container">
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
                <label htmlFor="poster">
                  <input
                    type="text"
                    name="poster"
                    id="poster"
                    value={ editionMovie.poster }
                    onChange={ this.handleChange }
                  />
                </label>
              </div>
            )
            : (
              <div className="movie-container">
                <p className="movie-title">{translation}</p>
                <p className="movie-subtitle">{title}</p>
                <p className="movie-subtitle">{year}</p>
              </div>
            )
        }
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
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Movie);
