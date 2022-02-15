import { LIMIT_MESSAGES, SORT_BY_MESSAGES, SORT_DIRECTION_MESSAGES } from 'app/config/firebase';
import { addNewMessage, getMessages, getCurrentUser, getFirebaseTimeStamp } from 'app/services';
import { actions, AppDispatch, AppThunk } from 'app/store';
import * as Types from 'app/types';

export const getMessagesFromFirestore: Function = () => {
  return (dispatch: AppDispatch) => {
    throw new Error('TODO');
  };
};

export const addMessageToFirestore =
  (text: string): AppThunk =>
  () => {
    throw new Error('TODO');
  };
