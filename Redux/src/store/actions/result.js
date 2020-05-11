import * as actionTypes from './actionTypes';

const storeResult = (result) => {
  // const updatedResult = result * 2;
  return {
    type: actionTypes.STORE,
    result: result
  }
}

export const store = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      dispatch(storeResult(result))
    }, 2000)
  }
}

export const remove = (id) => {
  return {
    type: actionTypes.REMOVE,
    elId: id
  }
}