import { createAction } from '@reduxjs/toolkit';

import * as Types from 'app/types';
import { FirebaseError, FirebaseUser } from 'app/types/firebase';

export const initializeAuth = createAction('auth/initialize/start');
export const initializeWithoutUser = createAction('auth/initialize/noUser');

export const initializeWithUser = createAction('auth/initialize/user', (user: FirebaseUser) => ({
  payload: user,
  meta: {
    request: {
      id: Types.RequestID.INITIALIZE_WITH_USER,
    },
  },
}));

export const updateUser = createAction('auth/user/request');

export const updateUserSuccess = createAction('auth/user/success', (user: FirebaseUser) => ({
  payload: user,
  meta: {
    request: {
      id: Types.RequestID.USER_UPDATE,
    },
  },
}));

export const updateUserFailure = createAction('auth/user/failure');

export const signIn = createAction('auth/signIn/request');

export const signInSuccess = createAction('auth/signIn/success', (user: FirebaseUser) => ({
  payload: user,
  meta: {
    request: {
      id: Types.RequestID.SIGN_IN,
    },
  },
}));

export const signInFailure = createAction('auth/signIn/failure', (error: FirebaseError) => ({
  payload: error,
  meta: {
    request: {
      id: Types.RequestID.SIGN_IN,
    },
  },
  error,
}));

export const signUp = createAction('auth/signUp/request');

export const signUpSuccess = createAction('auth/signUp/success', (user: FirebaseUser) => ({
  payload: user,
  meta: {
    request: {
      id: Types.RequestID.SIGN_UP,
    },
  },
}));

export const signUpFailure = createAction('auth/signUp/failure', (error: FirebaseError) => ({
  payload: error,
  meta: {
    request: {
      id: Types.RequestID.SIGN_UP,
    },
  },
  error,
}));

export const removeError = createAction('auth/error/remove');

export const signOut = createAction('auth/signOut');
