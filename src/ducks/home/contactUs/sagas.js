import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import { submitContactUsForm } from './services';

function* submitContactUsFormRequest(action) {
  const { payload } = action;

  yield put(actions.submitContactUsFormStart());
  try {
    const response = yield call(submitContactUsForm, payload);
    yield put(actions.submitContactUsFormSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(actions.submitContactUsFormError(error));
  }
}

export function* watchContactUsFormSagas() {
  yield takeLatest(types.SUBMIT_FORM_REQUEST, submitContactUsFormRequest);
}
