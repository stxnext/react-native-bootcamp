import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { all, put, takeLatest, call } from 'redux-saga/effects';

import { signIn, signUp, singOut, getCurrentUser } from 'app/services/firebase';

import * as authActions from '../actions/auth';
import { SignInAction, SignUpAction } from '../actions/auth';

export function* initializeAuthSaga() {
  try {
    const user: FirebaseAuthTypes.User = yield call(getCurrentUser);
    yield put(user ? authActions.initializeWithUser(user) : authActions.initializeWithOutUser());
  } catch (error) {
    // handle error
  }
}

export function* signInSaga(action: SignInAction) {
  try {
    const { username, password } = action.payload;
    const user: FirebaseAuthTypes.User = yield call(signIn, username, password);
    yield put(authActions.signInSuccess(user));
  } catch (error) {
    yield put(authActions.signInFailure(error as Error));
  }
}

export function* signUpSaga(action: SignUpAction) {
  try {
    const { username, password } = action.payload;
    const user: FirebaseAuthTypes.User = yield call(signUp, username, password);
    yield put(authActions.signUpSuccess(user));
  } catch (error) {
    yield put(authActions.signUpFailure(error as Error));
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
