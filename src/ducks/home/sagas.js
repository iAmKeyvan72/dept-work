import { call, put, takeLatest } from 'redux-saga/effects';
import { getHomeContent } from './services';

import * as types from './types';
import * as actions from './actions';

function* getHomeContentRequest() {
  yield put(actions.getHomeListStart());
  try {
    const response = yield call(getHomeContent);
    yield put(actions.setClients(response.clients));
    yield put(actions.setCategories(response.categories));
    yield put(actions.setHero(response.hero));
    yield put(actions.setIndustries(response.industries));
    yield put(actions.setWorks(response.works));
    yield put(actions.getHomeListSuccess());
  } catch (error) {
    console.log(error);
    yield put(actions.getHomeListError(error));
  }
}

export function* watchHomeSagas() {
  yield takeLatest(types.GET_HOME_LIST_REQUEST, getHomeContentRequest);
}
