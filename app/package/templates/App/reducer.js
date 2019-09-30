import { LOAD_MOVIES_SUCCESS, LOAD_MOVIES, LOAD_MOVIES_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  cinemaData: {
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
        cinemaData: {
          movies: false,
        },
      };

      return newState;
    }
    case LOAD_MOVIES_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        cinemaData: {
          movies: action.movies,
        }
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
