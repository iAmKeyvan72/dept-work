import * as types from './types';

export const submitContactUsFormStart = () => ({
  type: types.SUBMIT_FORM_START,
});

export const submitContactUsFormSuccess = (payload) => ({
  type: types.SUBMIT_FORM_SUCCESS,
  payload,
});

export const submitContactUsFormError = (payload) => ({
  type: types.SUBMIT_FORM_ERROR,
  payload,
});

export const submitContactUsFormRequest = (payload) => {
  return {
    type: types.SUBMIT_FORM_REQUEST,
    payload,
  };
};
