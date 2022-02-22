import { createAction } from '@reduxjs/toolkit';

import * as Types from 'app/types';

enum Action {
  AuthInitializeStart = 'auth/initialize/start',
  AuthInitializeNoUser = 'auth/initialize/noUser',
  AuthInitializeUser = 'auth/initialize/user',
  AuthUserRequest = 'auth/user/request',
  AuthUserSuccess = 'auth/user/success',
  AuthUserFailure = 'auth/user/failure',
  AuthSignInRequest = 'auth/signIn/request',
  AuthSignInSuccess = 'auth/signIn/success',
  AuthSignInFailure = 'auth/signIn/failure',
  AuthSignUpRequest = 'auth/signUp/request',
  AuthSignUpSuccess = 'auth/signUp/success',
  AuthSignUpFailure = 'auth/signUp/failure',
  AuthErrorRemove = 'auth/error/remove',
  AuthSignOut = 'auth/signOut',
}

export const initializeAuth = createAction(Action.AuthInitializeStart);
export const initializeWithoutUser = createAction(Action.AuthInitializeNoUser);

export const initializeWithUser = createAction(Action.AuthInitializeUser, (user: Types.FirebaseUser) => ({
  payload: user,
}));

export const updateUser = createAction(Action.AuthUserRequest);

export const updateUserSuccess = createAction(Action.AuthUserSuccess, (user: Types.FirebaseUser) => ({
  payload: user,
}));

export const updateUserFailure = createAction(Action.AuthUserFailure);

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

export const signOut = createAction(Action.AuthSignOut);
