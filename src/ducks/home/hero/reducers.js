import * as types from './types';

const initialState = {};

const heroReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_HERO:
      return payload;

    default:
      return state;
  }
};

export default heroReducer;
