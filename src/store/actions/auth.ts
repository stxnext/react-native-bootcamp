import { createAction } from '@reduxjs/toolkit';

import * as Constants from 'app/config/redux';
import * as Types from 'app/types';

export const initializeAuth = createAction(Constants.AUTH_INITIALIZE_START);
export const initializeWithoutUser = createAction(Constants.AUTH_INITIALIZE_NO_USER);

export const initializeWithUser = createAction(
  Constants.AUTH_INITIALIZE_USER,
  (user: Types.FirebaseUser) => ({
    payload: user,
  }),
);

export const updateUser = createAction(Constants.AUTH_USER_REQUEST);

export const updateUserSuccess = createAction(Constants.AUTH_USER_SUCCESS, (user: Types.FirebaseUser) => ({
  payload: user,
}));

export const updateUserFailure = createAction(Constants.AUTH_USER_FAILURE);

export const signIn = createAction(Constants.AUTH_SIGN_IN_REQUEST);

export const signInSuccess = createAction(Constants.AUTH_SIGN_IN_SUCCESS, (user: Types.FirebaseUser) => ({
  payload: user,
}));

export const signInFailure = createAction(Constants.AUTH_SIGN_IN_FAILURE, (error: Types.FirebaseError) => ({
  payload: error,
  error,
}));

export const signUp = createAction(Constants.AUTH_SIGN_UP_REQUEST);

export const signUpSuccess = createAction(Constants.AUTH_SIGN_UP_SUCCESS, (user: Types.FirebaseUser) => ({
  payload: user,
}));

export const signUpFailure = createAction(Constants.AUTH_SIGN_UP_FAILURE, (error: Types.FirebaseError) => ({
  payload: error,
  error,
}));

export const removeError = createAction(Constants.AUTH_ERROR_REMOVE);

export const signOut = createAction(Constants.AUTH_SIGN_OUT);
