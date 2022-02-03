import { createAction } from '@reduxjs/toolkit';

import * as Types from 'app/types';
import { FireBaseError, FireBaseUser } from 'app/types/firebase';

export const initializeAuth = createAction('auth/initialize/start');
export const initializeWithOutUser = createAction('auth/initialize/noUser');

export const initializeWithUser = createAction('auth/initialize/user', (user: FireBaseUser) => ({
  payload: user,
  meta: {
    request: {
      id: Types.RequestID.INITIALIZE_WITH_USER,
    },
  },
}));

export const updateUser = createAction('auth/user/request');

export const updateUserSuccess = createAction('auth/user/success', (user: FireBaseUser) => ({
  payload: user,
  meta: {
    request: {
      id: Types.RequestID.USER_UPDATE,
    },
  },
}));

export const updateUserFailure = createAction('auth/user/failure');

export const signIn = createAction('auth/signIn/request', (username: string, password: string) => ({
  payload: { username, password },
  meta: {
    request: {
      id: Types.RequestID.SIGN_IN,
    },
  },
}));

export const signInSuccess = createAction('auth/signIn/success', (user: FireBaseUser) => ({
  payload: user,
  meta: {
    request: {
      id: Types.RequestID.SIGN_IN,
    },
  },
}));

export const signInFailure = createAction('auth/signIn/failure', (error: FireBaseError) => ({
  payload: error,
  meta: {
    request: {
      id: Types.RequestID.SIGN_IN,
    },
  },
  error,
}));

export const signUp = createAction('auth/signUp/request', (username: string, password: string) => ({
  payload: { username, password },
  meta: {
    request: {
      id: Types.RequestID.SIGN_UP,
    },
  },
}));

export const signUpSuccess = createAction('auth/signUp/success', (user: FireBaseUser) => ({
  payload: user,
  meta: {
    request: {
      id: Types.RequestID.SIGN_UP,
    },
  },
}));

export const signUpFailure = createAction('auth/signUp/failure', (error: FireBaseError) => ({
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

export type UpdateUserAction = ReturnType<typeof updateUser>;
export type SignUpAction = ReturnType<typeof signUp>;
export type SignInAction = ReturnType<typeof signIn>;
export type SignOutAction = ReturnType<typeof signOut>;
