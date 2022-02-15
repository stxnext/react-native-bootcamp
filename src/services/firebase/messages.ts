import firestore from '@react-native-firebase/firestore';

import { CHANEL_ID } from 'app/config/firebase';
import * as Types from 'app/types';

export const getMessages: () => Types.FirebaseCollectionReference = () => {
  throw new Error('TODO');
};

export const addNewMessage: (message: Types.FirebaseMessage) => Promise<Types.FirebaseDocumentReference> = (
  message,
) => {
  throw new Error('TODO');
};

export const getFirebaseTimeStamp: () => Types.FirebaseFieldValue = () => {
  throw new Error('TODO');
};
