import { RootState } from 'app/store';

export const getUser = (state: RootState) => state.auth.user;

export const getError = (state: RootState) => state.auth.error;

export const isLoading = (state: RootState) => state.auth.isLoading;
