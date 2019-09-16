import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from './constants';

/**
 * Load the movies, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_MOVIES
 */
export function loadMovies() {
  return {
    type: LOAD_MOVIES,
  };
}

/**
 * Dispatched when the movies are loaded by the request saga
 *
 * @param  {object} movies The movies data
 * @param  {string} title The current title
 *
 * @return {object}      An action object with a type of LOAD_MOVIES_SUCCESS passing the movies
 */
export function moviesLoaded(movies, title) {
  return {
    type: LOAD_MOVIES_SUCCESS,
    movies,
    title,
  };
}

/**
 * Dispatched when loading the movies fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_MOVIES_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_MOVIES_ERROR,
    error,
  };
}
