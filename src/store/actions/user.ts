import { createAction } from '@reduxjs/toolkit';

import { AppAction } from 'app/store/actions/appAction';

export const updateLastActiveDate = createAction(AppAction.UserNewDate, (data: string) => ({
  payload: data,
}));
