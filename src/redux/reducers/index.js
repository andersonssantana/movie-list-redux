import { combineReducers } from 'redux';

const INITIAL_STATE = {
  topMovies: [],
};

const movies = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case 'LOAD_MOVIES':
    return {
      topMovies: action.payload
    };
  case 'DELETE_MOVIE':
    return {
      topMovies: state.topMovies.filter((movie) => movie.id !== action.id)
    }
  case 'SAVE_MOVIE':
    const editedMovies = state.topMovies.map((movie) => movie.id === action.id ? action.payload : movie);
    return {
      topMovies: editedMovies,
    };
   default:
    return state;
 }
}

const rootReducer = combineReducers({ movies })

export default rootReducer;
