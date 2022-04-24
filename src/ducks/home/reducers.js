import * as types from './types';

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const homeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_HOME_LIST_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case types.GET_HOME_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_HOME_LIST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default homeReducer;
