import { CHANGE_TITLE } from './constants';

// The initial state of the App
const initialState = {
  title: '',
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return { ...state, title: action.name };
    default:
      return state;
  }
}

export default homeReducer;
