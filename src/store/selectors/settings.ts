import { RootState } from 'app/store';

export function isDarkModeEnabled(state: RootState) {
  return state.settings.isDarkModeEnabled;
}
