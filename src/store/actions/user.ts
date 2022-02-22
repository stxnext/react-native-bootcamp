import { createAction } from '@reduxjs/toolkit';

enum Action {
  UserNewDate = 'user/new/date',
}

export const updateLastActiveDate = createAction(Action.UserNewDate, (data: string) => ({
  payload: data,
}));
