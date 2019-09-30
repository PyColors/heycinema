import homeReducer from '../reducer';
import { changeTitle } from '../actions';

describe('HomePage Reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      title: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeTitle action correctly', () => {
    const fixture = 'Titanic';
    const expectedResult = { ...state, title: fixture };

    expect(homeReducer(state, changeTitle(fixture))).toEqual(expectedResult);
  });
});
