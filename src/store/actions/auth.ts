import { createAction } from '@reduxjs/toolkit';

import { AppAction } from 'app/store/actions/appAction';
import * as Types from 'app/types';

export const initializeAuth = createAction(AppAction.AuthInitializeStart);
export const initializeWithoutUser = createAction(AppAction.AuthInitializeNoUser);

export const initializeWithUser = createAction(
  AppAction.AuthInitializeUser,
  (user: Types.FirebaseUser) => ({
    payload: user,
  }),
);

export const updateUser = createAction(AppAction.AuthUserRequest);

export const updateUserSuccess = createAction(AppAction.AuthUserSuccess, (user: Types.FirebaseUser) => ({
  payload: user,
}));

export const updateUserFailure = createAction(AppAction.AuthUserFailure);

export const signIn = createAction(AppAction.AuthSignInRequest);

export const signInSuccess = createAction(AppAction.AuthSignInSuccess, (user: Types.FirebaseUser) => ({
  payload: user,
}));

export const signInFailure = createAction(AppAction.AuthSignInFailure, (error: Types.FirebaseError) => ({
  payload: error,
}));

export const signUp = createAction(AppAction.AuthSignUpRequest);

export const signUpSuccess = createAction(AppAction.AuthSignUpSuccess, (user: Types.FirebaseUser) => ({
  payload: user,
}));

export const signUpFailure = createAction(AppAction.AuthSignUpFailure, (error: Types.FirebaseError) => ({
  payload: error,
}));

export const removeError = createAction(AppAction.AuthErrorRemove);

export const signOut = createAction(AppAction.AuthSignOut);
