import firestore from '@react-native-firebase/firestore';

import { CHANEL_ID } from 'app/config/firebase';
import * as Types from 'app/types';

export const getMessages: () => Types.FirebaseCollectionReference = () => firestore().collection(CHANEL_ID);

export const addNewMessage: (message: Types.FirebaseMessage) => Promise<Types.FirebaseDocumentReference> = (
  message,
) => getMessages().add(message);

export const getFirebaseTimeStamp: () => Types.FirebaseFieldValue = () =>
  firestore.FieldValue.serverTimestamp();
