import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
}

const removeResult = (state, action) => {
  const newArray = state.results.filter(el => el.id !== action.elId);
  return updateObject(state, { results: newArray });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE:
      return updateObject(state, { results: state.results.concat({id: new Date(), value: action.result })})
    case actionTypes.REMOVE:
    // const id = 2;
    // const index = 3;
    // const newArray = [...state.results];
    // newArray.splice(index, 1);
      return removeResult(state, action);
    default:
      return state;
  }
};

export default reducer;