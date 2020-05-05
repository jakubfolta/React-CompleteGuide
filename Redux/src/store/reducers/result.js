import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE:
    return {
      ...state,
      results: state.results.concat({id: new Date(), value: state.counter})
    }
    case actionTypes.DELETE:
    // const id = 2;
    // const index = 3;
    // const newArray = [...state.results];
    // newArray.splice(index, 1);

    const newArray = state.results.filter(el => el.id !== action.elId)
    return {
      ...state,
      results: newArray,
    }
  }
}

export default reducer;