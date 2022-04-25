import { all } from 'redux-saga/effects';

import { watchHomeSagas } from './home/sagas';
import { watchContactUsFormSagas } from './home/contactUs/sagas';

export function* rootSaga() {
  yield all([watchHomeSagas(), watchContactUsFormSagas()]);
}
