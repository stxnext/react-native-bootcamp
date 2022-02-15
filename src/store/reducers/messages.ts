import { createReducer } from '@reduxjs/toolkit';

import * as messagesActions from 'app/store/actions/messages';
import * as Types from 'app/types';

export interface MessagesState {
  messages: Types.FirebaseDocument[];
}

export const initialState: MessagesState = {
  messages: [],
};

export const messagesReducer = createReducer(initialState, (builder) => {
  builder.addCase(messagesActions.newMessages, (state, action) => {
    state.messages = action.payload;
  });
});
