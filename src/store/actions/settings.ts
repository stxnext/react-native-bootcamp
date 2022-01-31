import { createAction } from '@reduxjs/toolkit';

export const setIsDarkModeEnabled = createAction('theme/darkMode/set', (isDarkModeEnabled: boolean) => ({
  payload: { isDarkModeEnabled },
}));
