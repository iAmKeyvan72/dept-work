import * as types from './types';

export const getHomeListRequest = () => ({
  type: types.GET_HOME_LIST_REQUEST,
});

export const getHomeListStart = () => ({
  type: types.GET_HOME_LIST_START,
});

export const getHomeListSuccess = () => ({
  type: types.GET_HOME_LIST_SUCCESS,
});

export const getHomeListError = (payload) => ({
  type: types.GET_HOME_LIST_ERROR,
  payload,
});

export * from './clients/actions';
export * from './works/actions';
export * from './categories/actions';
export * from './industries/actions';
export * from './hero/actions';
