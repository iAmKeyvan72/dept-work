import * as types from './types';

export const setWorks = (payload) => ({
  type: types.SET_WORKS,
  payload,
});

export const getFilteredWorks = (payload) => ({
  type: types.GET_FILTERED_WORKS,
  payload,
});
