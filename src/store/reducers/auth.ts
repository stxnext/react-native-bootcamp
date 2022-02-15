import { createReducer } from '@reduxjs/toolkit';

import * as Types from 'app/types';

import * as authActions from '../actions/auth';

export interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: Types.FirebaseUser | null;
  error: Types.FirebaseError | null;
}

export const initialState: AuthState = {
  isLoading: true,
  isLoggedIn: false,
  user: null,
  error: null,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(authActions.initializeWithUser, (state, action) => {
    state.user = action.payload;
    state.isLoading = false;
    state.isLoggedIn = true;
    state.error = null;
  });

  builder.addCase(authActions.initializeWithoutUser, (state) => {
    state.isLoading = false;
    state.error = null;
  });

  builder.addCase(authActions.updateUser, (state) => {
    state.isLoading = true;
  });

  builder.addCase(authActions.updateUserSuccess, (state, action) => {
    state.user = action.payload;
    state.isLoading = false;
  });

  builder.addCase(authActions.updateUserFailure, (state) => {
    state.isLoading = false;
  });

  builder.addCase(authActions.signIn, (state) => {
    state.isLoading = true;
  });

  builder.addCase(authActions.signInSuccess, (state, action) => {
    state.isLoading = false;
    state.user = action.payload;
    state.isLoggedIn = true;
    state.error = null;
  });

  builder.addCase(authActions.signInFailure, (state, action) => {
    state.isLoading = false;
    state.error = action.error;
  });

  builder.addCase(authActions.signUp, (state) => {
    state.isLoading = true;
  });

  builder.addCase(authActions.signUpSuccess, (state, action) => {
    state.isLoggedIn = true;
    state.user = action.payload;
    state.isLoading = false;
    state.error = null;
  });

  builder.addCase(authActions.signUpFailure, (state, action) => {
    state.isLoading = false;
    state.error = action.error;
  });

  builder.addCase(authActions.signOut, (state) => {
    state.isLoggedIn = false;
    state.user = initialState.user;
    state.error = null;
  });

  builder.addCase(authActions.removeError, (state) => {
    state.error = null;
  });
});
