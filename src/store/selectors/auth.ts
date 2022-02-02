import { RootState } from 'app/store';

export function isLoading(state: RootState) {
  return state.auth.isLoading;
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
