import appReducer from '../reducer';
import { loadMovies, moviesLoaded, moviesLoadingError } from '../actions';

describe('AppReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      cinemaData: {
        movies: false,
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadMovies action correctly', () => {
    const expectedResult = {
      ...state,
      loading: true,
      error: false,
      cinemaData: { movies: false },
    };
    expect(appReducer(state, loadMovies())).toEqual(expectedResult);
  });

  it('should handle the moviesLoaded action correctly', () => {
    const fixture = [
      {
        Title: 'Titanic',
      }
    ];
    const expectedResult = {
      ...state,
      loading: false,
      cinemaData: { movies: fixture },
    };

    expect(appReducer(state, moviesLoaded(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the moviesLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };

    const expectedResult = {
      ...state,
      error: fixture,
      loading: false,
    };

    expect(appReducer(state, moviesLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
