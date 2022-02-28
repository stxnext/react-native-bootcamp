import { LIMIT_MESSAGES, SORT_BY_MESSAGES, SORT_DIRECTION_MESSAGES } from 'app/config/firestore';
import { addNewMessage, getMessages, getCurrentUser, getFirebaseTimeStamp } from 'app/services';
import { actions, AppDispatch, AppThunk } from 'app/store';
import * as Types from 'app/types';

export const getMessagesFromFirestore: Function = () => {
  return (dispatch: AppDispatch) => {
    return getMessages()
      .orderBy(SORT_BY_MESSAGES, SORT_DIRECTION_MESSAGES)
      .limit(LIMIT_MESSAGES)
      .onSnapshot((querySnapshot: Types.FirebaseDocument) => {
        const data: Types.Message[] = [];
        querySnapshot?.forEach((documentSnapshot: Types.FirebaseDocument) => {
          data.unshift({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        dispatch(actions.newMessages(data));
      });
  };
};

export const addMessageToFirestore =
  (text: string): AppThunk =>
  () => {
    try {
      const user: Types.FirebaseUser | null = getCurrentUser();
      if (user) {
        addNewMessage({
          text,
          createdAt: getFirebaseTimeStamp(),
          email: user.email,
          photoUrl: user.photoURL,
        });
      }
    } catch (error) {
      // handle error
    }
  };
