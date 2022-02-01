import { RootState } from 'app/store';

export function isAuthInitialized(state: RootState) {
  return state.auth.initialized;
}

export function isLoggedIn(state: RootState) {
  return state.auth.isLoggedIn;
}

export function getUser(state: RootState) {
  return state.auth.user;
}

export function getError(state: RootState) {
  return state.auth.error;
}
