import { all, put, takeLatest, call } from 'redux-saga/effects';

import { signIn, signUp, singOut, getCurrentUser } from 'app/services/firebase';
import { FireBaseError, FireBaseUser } from 'app/types/firebase';

import * as authActions from '../actions/auth';
import { SignInAction, SignUpAction } from '../actions/auth';

export function* initializeAuthSaga() {
  try {
    const user: FireBaseUser = yield call(getCurrentUser);
    yield put(user ? authActions.initializeWithUser(user) : authActions.initializeWithOutUser());
  } catch (error) {
    // handle error
  }
}

export function* signInSaga(action: SignInAction) {
  try {
    const { username, password } = action.payload;
    const user: FireBaseUser = yield call(signIn, username, password);
    yield put(authActions.signInSuccess(user));
  } catch (error) {
    yield put(authActions.signInFailure(error as FireBaseError));
  }
}

export function* signUpSaga(action: SignUpAction) {
  try {
    const { username, password } = action.payload;
    const user: FireBaseUser = yield call(signUp, username, password);
    yield put(authActions.signUpSuccess(user));
  } catch (error) {
    yield put(authActions.signUpFailure(error as FireBaseError));
  }
}

export function* signOutSaga() {
  try {
    yield call(singOut);
    yield put(authActions.signOut);
  } catch (error) {
    // handle error
  }
}

export function* watchAuth() {
  yield all([
    takeLatest(authActions.initializeAuth, initializeAuthSaga),
    takeLatest(authActions.signIn, signInSaga),
    takeLatest(authActions.signUp, signUpSaga),
    takeLatest(authActions.signOut, signOutSaga),
  ]);
}
