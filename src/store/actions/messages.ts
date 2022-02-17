import { createAction } from '@reduxjs/toolkit';

import { NEW_MESSAGES } from 'app/config/redux';
import * as Types from 'app/types';

export const newMessages = createAction(NEW_MESSAGES, (data: Types.FirebaseDocument[]) => ({
  payload: data,
}));
