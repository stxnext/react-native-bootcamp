import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export type FirebaseError = FirebaseAuthTypes.NativeFirebaseAuthError;

export type FirebaseUser = FirebaseAuthTypes.User;

export type FirebaseDocument = FirebaseFirestoreTypes.DocumentData;

export type FirebaseDocumentReference = FirebaseFirestoreTypes.DocumentReference;

export type FirebaseCollectionReference = FirebaseFirestoreTypes.CollectionReference;

export type FirebaseFieldValue = FirebaseFirestoreTypes.FieldValue;

export interface FirebaseMessage {
  text: string;
  createdAt: FirebaseFieldValue;
  email: string | null;
  photoUrl: string | null;
}
