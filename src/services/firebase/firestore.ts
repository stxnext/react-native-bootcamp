import firestore from '@react-native-firebase/firestore';

import {
  FirebaseCollectionReference,
  FirebaseDocumentReference,
  FirebaseFieldValue,
  FirebaseMessage,
} from 'app/types/firebase';

export const getCollection: (id: string) => FirebaseCollectionReference = (id) =>
  firestore().collection(id);

export const addToCollection: (id: string, message: FirebaseMessage) => Promise<FirebaseDocumentReference> =
  async (id, message) => await firestore().collection(id).add(message);

export const getFirebaseTimeStamp: () => FirebaseFieldValue = () => firestore.FieldValue.serverTimestamp();
