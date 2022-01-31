import { createReducer } from '@reduxjs/toolkit';

import * as settingsActions from '../actions/settings';

export interface SettingsState {
  isDarkModeEnabled: boolean;
}

export const initialState: SettingsState = {
  isDarkModeEnabled: false,
};

export const settingsReducer = createReducer(initialState, (builder) => {
  builder.addCase(settingsActions.setIsDarkModeEnabled, (state, action) => {
    state.isDarkModeEnabled = action.payload.isDarkModeEnabled;
  });
});
