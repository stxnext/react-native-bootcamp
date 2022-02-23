import { createAction } from '@reduxjs/toolkit';

enum Action {
  AuthSignInRequest = 'auth/signIn/request',
}

export const signIn = createAction(Action.AuthSignInRequest);
