import { call, put, takeLatest } from 'redux-saga/effects';
import { getHomeContent } from './services';

import * as types from './types';
import * as homeActions from './actions';

function* getHomeContentRequest() {
  yield put(homeActions.getHomeListStart());
  try {
    const response = yield call(getHomeContent);
    yield put(homeActions.getHomeListSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(homeActions.getHomeListError(error));
  }
}

export function* watchHomeSagas() {
  yield takeLatest(types.GET_HOME_LIST_REQUEST, getHomeContentRequest);
}
