import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface FirebaseError extends FirebaseAuthTypes.NativeFirebaseAuthError {}
export interface FirebaseUser extends FirebaseAuthTypes.User {}
