import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from "redux-thunk";

import search from '../src/package/pages/SearchPage/reducers/searchReducer';
import status from '../src/package/pages/SearchPage/reducers/statusReducer';

export default createStore(
  combineReducers({
      search,
      status
  }), {},
  applyMiddleware(thunk)
)
