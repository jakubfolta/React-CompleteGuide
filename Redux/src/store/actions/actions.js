export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE = 'STORE';
export const REMOVE = 'REMOVE';

export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const add = (val) => {
  return {
    type: 'ADD',
    payload: {
      value: val
    }
  }
}

export const subtract = (val) => {
  return {
    type: 'SUBTRACT',
    payload: {
      value: val
    }
  }
}

export const store = (result) => {
  return {
    type: 'STORE',
    result: result
  }
}

export const remove = (id) => {
  return {
    type: 'REMOVE',
    elId: id
  }
}