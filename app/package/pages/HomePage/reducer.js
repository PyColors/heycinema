import { CHANGE_TITLE } from './constants';

// The initial state of the App
const initialState = {
  title: '',
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      // Delete prefixed '@' from the github title
      return { ...state, title: action.name.replace(/@/gi, '') };
    default:
      return state;
  }
}

export default homeReducer;
