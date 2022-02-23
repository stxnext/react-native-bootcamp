import { RootState } from 'app/store';

export const getUser = (state: RootState) => state.auth.user;
