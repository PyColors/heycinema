import {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectMovies,
  makeSelectLocation,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = {
      global: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectMovies', () => {
  const reposSelector = makeSelectMovies();
  it('should select the data movies', () => {
    const movies = [];
    const mockedState = {
      global: {
        cinemaData: {
          movies,
        },
      },
    };
    expect(reposSelector(mockedState)).toEqual(movies);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const router = {
      location: { pathname: '/about' },
    };
    const mockedState = {
      router,
    };
    expect(locationStateSelector(mockedState)).toEqual(router.location);
  });
});
