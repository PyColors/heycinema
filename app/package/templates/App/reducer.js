import { LOAD_MOVIES_SUCCESS, LOAD_MOVIES, LOAD_MOVIES_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    movies: false,
  },
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        userData: {
          movies: false,
        },
      };

      return newState;
    }
    case LOAD_MOVIES_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        userData: {
          movies: action.movies,
        },
        currentUser: action.title,
      };
      return newState;
    }

    case LOAD_MOVIES_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default appReducer;
