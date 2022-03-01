import { createReducer } from '@reduxjs/toolkit';

import * as userActions from 'app/store/actions/user';

export interface UserState {
  lastActiveDate: string;
}

export const initialState: UserState = {
  lastActiveDate: '',
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(userActions.updateLastActiveDate, (state, action) => {
    state.lastActiveDate = action.payload;
  });
});
