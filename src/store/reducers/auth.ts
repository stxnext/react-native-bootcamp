import { createReducer } from '@reduxjs/toolkit';

import * as authActions from '../actions/auth';

export interface AuthState {
  user: null;
}

export const initialState: AuthState = {
  user: null,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(authActions.signIn, (state) => {
    state.user = null;
  });
});
