import * as types from './types';

const initialState = {
  loading: false,
  error: null,
};

const contactUsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SUBMIT_FORM_START:
      return {
        ...state,
        loading: true,
      };
    case types.SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.SUBMIT_FORM_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default contactUsReducer;
