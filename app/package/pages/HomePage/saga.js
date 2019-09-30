// Gets the movies from API
import {
  call, put, select, takeLatest
} from 'redux-saga/effects';

import { LOAD_MOVIES } from '../../templates/App/constants';
import { moviesLoaded, moviesLoadingError } from '../../templates/App/actions';

import request from '../../../utils/request';
import { makeSelectTitle } from './selectors';

// movies request/response handler
export function* getMovies() {
  // Select title from store
  const title = yield select(makeSelectTitle());
  const requestURL = `http://www.omdbapi.com/?t=${title}&apikey=ebcafcfe`;

  try {
    // Call our request helper ('../../../utils/request')
    const movies = yield call(request, requestURL);
    yield put(moviesLoaded(movies, title));
  } catch (err) {
    yield put(moviesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* omdDData() {
  // Watches for LOAD_MOVIES actions and calls getMovies when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_MOVIES, getMovies);
}
