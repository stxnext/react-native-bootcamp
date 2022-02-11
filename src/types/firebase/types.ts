import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import FieldValue = FirebaseFirestoreTypes.FieldValue;

export interface FirebaseError extends FirebaseAuthTypes.NativeFirebaseAuthError {}

export interface FirebaseUser extends FirebaseAuthTypes.User {}

export interface FirebaseDocument extends FirebaseFirestoreTypes.DocumentData {}

export interface FirebaseDocumentReference extends FirebaseFirestoreTypes.DocumentReference {}

export interface FirebaseCollectionReference extends FirebaseFirestoreTypes.CollectionReference {}

export interface FirebaseFieldValue extends FieldValue {}

export interface FirebaseMessage {
  text: string;
  createdAt: FirebaseFieldValue;
  email: string | null;
  photoUrl: string | null;
}
