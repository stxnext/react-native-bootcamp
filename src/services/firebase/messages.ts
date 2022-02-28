import firestore from '@react-native-firebase/firestore';

import { CHAT_ID } from 'app/config/firestore';
import * as Types from 'app/types';

export const getMessages: () => Types.FirebaseCollectionReference = () =>
  firestore().collection(`chats/${CHAT_ID}/messages`);

export const addNewMessage: (message: Types.Message) => Promise<Types.FirebaseDocumentReference> = (
  message,
) => getMessages().add(message);

export const getFirebaseTimeStamp: () => Types.FirebaseFieldValue = () =>
  firestore.FieldValue.serverTimestamp();
