import { selectHome, makeSelectTitle } from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      moviesData: {},
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectTitle', () => {
  const titleSelector = makeSelectTitle();
  it('should select the title', () => {
    const title = 'Titanic';
    const mockedState = {
      home: {
        title,
      },
    };
    expect(titleSelector(mockedState)).toEqual(title);
  });
});
