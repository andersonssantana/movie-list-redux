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
   default:
    return state;
 }
}

const rootReducer = combineReducers({ movies })

export default rootReducer;
