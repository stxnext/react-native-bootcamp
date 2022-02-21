import { createAction } from '@reduxjs/toolkit';

import { AppAction } from 'app/store/actions/appAction';
import * as Types from 'app/types';

export const newMessages = createAction(AppAction.NewMessages, (data: Types.Message[]) => ({
  payload: data,
}));
