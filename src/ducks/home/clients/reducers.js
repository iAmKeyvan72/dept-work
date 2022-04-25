import * as types from './types';

const initialState = [];

const clientsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_CLIENTS:
      return payload;

    default:
      return state;
  }
};

export default clientsReducer;
