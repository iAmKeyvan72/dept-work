import * as types from './types';

export const setHero = (payload) => ({
  type: types.SET_HERO,
  payload,
});
