import { createAction } from '@reduxjs/toolkit';

import { USER_NEW_DATE } from 'app/config/redux';
import * as Types from 'app/types';

export const updateLastActiveDate = createAction(USER_NEW_DATE, (data: string) => ({
  payload: data,
  meta: {
    request: {
      id: Types.UserRequestID.NEW_DATE,
    },
  },
}));
