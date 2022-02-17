import { createAction } from '@reduxjs/toolkit';

import { USER_NEW_DATE } from 'app/config/redux';

export const updateLastActiveDate = createAction(USER_NEW_DATE, (data: string) => ({
  payload: data,
}));
