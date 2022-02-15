import auth from '@react-native-firebase/auth';

import { FirebaseUser } from 'app/types/firebase';

export const signIn: (email: string, password: string) => Promise<FirebaseUser> = async (
  email,
  password,
) => {
  throw new Error('TODO');
};

export const signUp: (email: string, password: string) => Promise<FirebaseUser> = async (
  email,
  password,
) => {
  throw new Error('TODO');
};

export const singOut: () => Promise<void> = async () => {
  throw new Error('TODO');
};

export const getCurrentUser: () => FirebaseUser | null = () => null;

export const updateUserPhoto: (uri: string) => Promise<void> = async (uri) => {
  throw new Error('TODO');
};
