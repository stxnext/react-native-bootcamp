import { createReducer } from '@reduxjs/toolkit';

import { FireBaseError, FireBaseUser } from 'app/types/firebase';

import * as authActions from '../actions/auth';

export interface AuthState {
  initialized: boolean;
  isLoggedIn: boolean;
  user: FireBaseUser | null;
  error: FireBaseError | null;
}

export const initialState: AuthState = {
  initialized: false,
  isLoggedIn: false,
  user: null,
  error: null,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(authActions.initializeWithUser, (state, action) => {
    state.user = action.payload;
    state.initialized = true;
    state.isLoggedIn = true;
    state.error = null;
  });

  builder.addCase(authActions.initializeWithOutUser, (state) => {
    state.initialized = true;
    state.error = null;
  });

  builder.addCase(authActions.signInSuccess, (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.error = null;
  });

  builder.addCase(authActions.signInFailure, (state, action) => {
    state.error = action.error;
  });

  builder.addCase(authActions.signUpSuccess, (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.error = null;
  });

  builder.addCase(authActions.signUpFailure, (state, action) => {
    state.error = action.error;
  });

  builder.addCase(authActions.signOut, (state) => {
    state.isLoggedIn = false;
    state.user = initialState.user;
    state.error = null;
  });
});
