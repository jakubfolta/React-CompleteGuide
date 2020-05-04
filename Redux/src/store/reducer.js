const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.payload.value
      }
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.payload.value
      }
    case 'STORE':
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter})
      }
    case 'DELETE':
      // const id = 2;
      // const index = 3;
      // const newArray = [...state.results];
      // newArray.splice(index, 1);
      return {
        ...state,
        // results: newArray,
        
      }
  }

  return state;
};

export default reducer;