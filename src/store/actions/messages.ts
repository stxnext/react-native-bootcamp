import { createAction } from '@reduxjs/toolkit';

import * as Types from 'app/types';

enum Action {
  NewMessages = 'messages/newMessages',
}

export const newMessages = createAction(Action.NewMessages, (data: Types.Message[]) => ({
  payload: data,
}));
