const initialState = {
  search: '',
  searchError: '',
}

export default (state = initialState, action) => {
  const actionHandlers = {

    'SEARCH_REQUEST': {
      search: 'PENDING',
      searchError: '',
    },
    'SEARCH_SUCCESS': {
      search: 'SUCCESS', 
      searchError: '',      
    },
    'SEARCH_FAILURE': {
      search: 'ERROR',
      searchError: action.error, 
    }
  }

  const statesToUpdate = actionHandlers[action.type];
  state = Object.assign({}, state, statesToUpdate);
  return state;
}
