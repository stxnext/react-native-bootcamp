import { RootState } from 'app/store';

export const getLastActiveDate = (state: RootState) => state.user.lastActiveDate;
