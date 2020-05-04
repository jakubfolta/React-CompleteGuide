import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.payload.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.payload.value
      }
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

  return state;
};

export default reducer;