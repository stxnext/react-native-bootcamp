import { createReducer } from '@reduxjs/toolkit';

import * as Types from 'app/types';

import * as authActions from '../actions/auth';

export interface AuthState {
  isLoading: boolean;
  user: Types.FirebaseUser | null;
  error: string | null;
}

export const initialState: AuthState = {
  isLoading: false,
  user: null,
  error: null,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(authActions.signIn, (state) => {
    state.isLoading = true;
  });

  builder.addCase(authActions.signInSuccess, (state, action) => {
    state.isLoading = false;
    state.user = action.payload;
    state.error = null;
  });

  builder.addCase(authActions.signInFailure, (state, action) => {
    state.isLoading = false;
    state.error = action.payload.message;
  });

  builder.addCase(authActions.signUp, (state) => {
    state.isLoading = true;
  });

  builder.addCase(authActions.signUpSuccess, (state, action) => {
    state.user = action.payload;
    state.isLoading = false;
    state.error = null;
  });

  builder.addCase(authActions.signUpFailure, (state, action) => {
    state.isLoading = false;
    state.error = action.payload.message;
  });
  builder.addCase(authActions.removeError, (state) => {
    state.error = null;
  });
});
