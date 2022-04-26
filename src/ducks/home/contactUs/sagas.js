import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import { submitContactUsForm } from './services';
import { toast } from 'react-toastify';

function* submitContactUsFormRequest(action) {
  const { payload } = action;

  yield put(actions.submitContactUsFormStart());
  try {
    const response = yield call(submitContactUsForm, payload);
    toast.success('Your message has been sent successfully.');
    yield put(actions.submitContactUsFormSuccess(response));
  } catch (error) {
    console.log(error);
    toast.error('Submitting the form failed');
    yield put(actions.submitContactUsFormError(error));
  }
}

export function* watchContactUsFormSagas() {
  yield takeLatest(types.SUBMIT_FORM_REQUEST, submitContactUsFormRequest);
}
