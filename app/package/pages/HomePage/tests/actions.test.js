import { CHANGE_TITLE } from '../constants';

import { changeTitle } from '../actions';

describe('HomePage Actions', () => {
  describe('changeTitle', () => {
    it('should return the correct type and the passed title', () => {
      const fixture = 'Titanic';
      const expectedResult = {
        type: CHANGE_TITLE,
        name: fixture
      };

      expect(changeTitle(fixture)).toEqual(expectedResult);
    });
  });
});
