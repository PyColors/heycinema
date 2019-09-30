import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from '../constants';

import {
  loadMovies,
  moviesLoaded,
  moviesLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadMovies', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_MOVIES,
      };

      expect(loadMovies()).toEqual(expectedResult);
    });
  });

  describe('moviesLoaded', () => {
    it('should return the correct type and the passed movies', () => {
      const fixture = ['Titanic'];
      const title = 'Tina';
      const expectedResult = {
        type: LOAD_MOVIES_SUCCESS,
        movies: fixture,
        title,
      };

      expect(moviesLoaded(fixture, title)).toEqual(expectedResult);
    });
  });

  describe('moviesLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'No result has been found, try again',
      };
      const expectedResult = {
        type: LOAD_MOVIES_ERROR,
        error: fixture,
      };

      expect(moviesLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
