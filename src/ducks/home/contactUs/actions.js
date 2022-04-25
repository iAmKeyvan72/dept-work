import * as types from './types';

export const submitContactUsFormStart = () => ({
  type: types.SUBMIT_FORM_START,
});

export const submitContactUsFormSuccess = () => ({
  type: types.SUBMIT_FORM_SUCCESS,
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
