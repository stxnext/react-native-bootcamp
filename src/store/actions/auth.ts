import { createAction } from '@reduxjs/toolkit';

import * as Types from 'app/types';

enum Action {
  AuthInitializeStart = 'auth/initialize/start',
  AuthSignInRequest = 'auth/signIn/request',
  AuthSignInSuccess = 'auth/signIn/success',
  AuthSignInFailure = 'auth/signIn/failure',
  AuthSignUpRequest = 'auth/signUp/request',
  AuthSignUpSuccess = 'auth/signUp/success',
  AuthSignUpFailure = 'auth/signUp/failure',
  AuthErrorRemove = 'auth/error/remove',
}

export const signIn = createAction(Action.AuthSignInRequest);

export const signInSuccess = createAction(Action.AuthSignInSuccess, (user: Types.FirebaseUser) => ({
  payload: user,
}));

export const signInFailure = createAction(Action.AuthSignInFailure, (error: Types.FirebaseError) => ({
  payload: error,
}));

export const signUp = createAction(Action.AuthSignUpRequest);

export const signUpSuccess = createAction(Action.AuthSignUpSuccess, (user: Types.FirebaseUser) => ({
  payload: user,
}));

export const signUpFailure = createAction(Action.AuthSignUpFailure, (error: Types.FirebaseError) => ({
  payload: error,
}));

export const removeError = createAction(Action.AuthErrorRemove);
