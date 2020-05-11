import * as actionTypes from './actionTypes';

const storeResult = (result) => {
  const updatedResult = result * 2;
  return {
    type: actionTypes.STORE,
    result: updatedResult
  }
}

export const store = (result) => {
  return dispatch => {
    setTimeout(() => {
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