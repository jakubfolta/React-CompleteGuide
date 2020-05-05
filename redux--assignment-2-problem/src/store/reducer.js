import * as actionTypes from './actions';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state
      }
    case actionTypes.DELETE:
      return {
        ...state
      }
  }
  return state;
}

export default reducer;