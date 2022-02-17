import { RootState } from 'app/store';

export const isLoading = (state: RootState) => state.auth.isLoading;

export const getUser = (state: RootState) => state.auth.user;

export const getError = (state: RootState) => state.auth.error;
