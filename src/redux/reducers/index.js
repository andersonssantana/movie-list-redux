import { combineReducers } from 'redux';
import { LOAD_MOVIES, DELETE_MOVIE, SAVE_MOVIE } from '../actions/actionTypes';

const INITIAL_STATE = {
  topMovies: [],
};

const movies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOAD_MOVIES:
    return {
      topMovies: action.payload,
    };
  case DELETE_MOVIE:
    return {
      topMovies: state.topMovies
        .filter((movie) => movie.id !== action.id),
    };
  case SAVE_MOVIE:
    return {
      topMovies: state.topMovies
        .map((movie) => (movie.id === action.id ? action.payload : movie)),
    };
  default:
    return state;
  }
};

const rootReducer = combineReducers({ movies });

export default rootReducer;
