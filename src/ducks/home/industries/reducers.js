import * as types from './types';

const initialState = [];

const industriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_INDUSTRIES:
      return payload;

    default:
      return state;
  }
};

export default industriesReducer;
