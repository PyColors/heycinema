// Tests for HomePage sagas
import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_MOVIES } from '../../../templates/App/constants';
import { moviesLoaded, moviesLoadingError } from '../../../templates/App/actions';

// import omdDData, saga manages watcher lifecycle
import omdDData, { getMovies } from '../saga';

const title = 'Titanic';

/* eslint-disable redux-saga/yield-effects */
describe('getMovies Saga', () => {
  let getMoviesGenerator;

  // Test twice, once for a successful load and once for an unsuccessful one
  // All the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getMoviesGenerator = getMovies();

    const selectDescriptor = getMoviesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getMoviesGenerator.next(title).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the moviesLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First movie',
    }, {
      name: 'Second movie',
    }];
    const putDescriptor = getMoviesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(moviesLoaded(response, title)));
  });

  it('should call the moviesLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getMoviesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(moviesLoadingError(response)));
  });
});

describe('omdDDataSaga Saga', () => {
  const omdDDataSaga = omdDData();

  it('should start task to watch for LOAD_MOVIES action', () => {
    const takeLatestDescriptor = omdDDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_MOVIES, getMovies));
  });
});
