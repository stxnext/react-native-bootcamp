import { LIMIT_MESSAGES, SORT_BY_MESSAGES, SORT_DIRECTION_MESSAGES } from 'app/config/firebase';
import { addToCollection, getCollection, getCurrentUser, getFirebaseTimeStamp } from 'app/services';
import { actions, AppDispatch, AppThunk } from 'app/store';
import { FirebaseDocument, FirebaseMessage, FirebaseUser } from 'app/types/firebase';

export const getFirestoreCollection: Function = (id: string) => {
  return (dispatch: AppDispatch) => {
    return getCollection(id)
      .orderBy(SORT_BY_MESSAGES, SORT_DIRECTION_MESSAGES)
      .limit(LIMIT_MESSAGES)
      .onSnapshot((querySnapshot: FirebaseDocument) => {
        const data: FirebaseDocument[] = [];
        querySnapshot.forEach((documentSnapshot: FirebaseDocument) => {
          data.unshift({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        dispatch(actions.firebaseCollectionData(data));
      });
  };
};

export const addMessageToFirestoreCollection =
  (id: string, text: string): AppThunk<Promise<void>> =>
  async () => {
    try {
      const user: FirebaseUser | null = getCurrentUser();
      if (user) {
        const message: FirebaseMessage = {
          text,
          createdAt: getFirebaseTimeStamp(),
          email: user.email,
          photoUrl: user.photoURL,
        };
        await addToCollection(id, message);
      }
    } catch (error) {
      // handle error
    }
  };
