import * as types from './types';

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_CATEGORIES:
      return payload;

    default:
      return state;
  }
};

export default categoriesReducer;
