import * as types from './types';

export const getHomeListRequest = () => ({
  type: types.GET_HOME_LIST_REQUEST,
});

export const getHomeListStart = () => ({
  type: types.GET_HOME_LIST_START,
});

export const getHomeListSuccess = (payload) => {
  return {
    type: types.GET_HOME_LIST_SUCCESS,
    payload,
  };
};

export const getHomeListError = (payload) => ({
  type: types.GET_HOME_LIST_ERROR,
  payload,
});
