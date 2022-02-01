import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface FireBaseError extends FirebaseAuthTypes.NativeFirebaseAuthError {}
export interface FireBaseUser extends FirebaseAuthTypes.User {}
