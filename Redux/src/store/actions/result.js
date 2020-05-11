import * as actionTypes from './actionTypes';

const storeResult = (result) => {
  return {
    type: actionTypes.STORE,
    result: result
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