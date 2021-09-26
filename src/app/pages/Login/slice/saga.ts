import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { authActions } from '.';
import { globalLoadingActions } from 'app/components/GlobalLoading/slice';
import { LoginPayload } from './types';

function* login(action: PayloadAction<LoginPayload>) {
  yield put(globalLoadingActions.showLoading());
  yield delay(2000);
  const fakeData = {
    jwt: '1111',
    user: 'User',
  };
  yield put(globalLoadingActions.hideLoading());
  yield put(authActions.loginSuccess(fakeData));
}

export function* authSaga() {
  yield takeLatest(authActions.loginRequest.type, login);
}
