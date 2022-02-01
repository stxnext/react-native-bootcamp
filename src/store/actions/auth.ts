import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createAction } from '@reduxjs/toolkit';

import * as Types from 'app/types';

export const initializeAuth = createAction('auth/initialize/start');
export const initializeWithOutUser = createAction('auth/initialize/noUser');

export const initializeWithUser = createAction('auth/initialize/user', (user: FirebaseAuthTypes.User) => ({
  payload: user,
  meta: {
    request: {
      id: Types.RequestID.INITIALIZE_WITH_USER,
    },
  },
}));

export const signIn = createAction('auth/signIn/request', (username: string, password: string) => ({
  payload: { username, password },
  meta: {
    request: {
      id: Types.RequestID.SIGN_IN,
    },
  },
}));

export const signInSuccess = createAction('auth/signIn/success', (user: FirebaseAuthTypes.User) => ({
  payload: user,
  meta: {
    request: {
      id: Types.RequestID.SIGN_IN,
    },
  },
}));

export const signInFailure = createAction('auth/signIn/failure', (error: Error) => ({
  payload: error.message,
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

export const signUpSuccess = createAction('auth/signUp/success', (user: FirebaseAuthTypes.User) => ({
  payload: user,
  meta: {
    request: {
      id: Types.RequestID.SIGN_UP,
    },
  },
}));

export const signUpFailure = createAction('auth/signUp/failure', (error: Error) => ({
  payload: error.message,
  meta: {
    request: {
      id: Types.RequestID.SIGN_UP,
    },
  },
  error,
}));

export const signOut = createAction('auth/signOut');

export type SignUpAction = ReturnType<typeof signUp>;
export type SignInAction = ReturnType<typeof signIn>;
export type SignOutAction = ReturnType<typeof signOut>;
