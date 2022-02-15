import auth from '@react-native-firebase/auth';

import * as Types from 'app/types';

export const signIn: (email: string, password: string) => Promise<Types.FirebaseUser> = async (
  email,
  password,
) =>
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => user.user)
    .catch((error) => {
      throw error;
    });

export const signUp: (email: string, password: string) => Promise<Types.FirebaseUser> = async (
  email,
  password,
) =>
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => user.user)
    .catch((error) => {
      throw error;
    });

export const singOut: () => Promise<void> = async () => await auth().signOut();

export const getCurrentUser: () => Types.FirebaseUser | null = () => auth().currentUser;

export const updateUserPhoto: (uri: string) => Promise<void> = async (uri) => {
  const userInfo = {
    photoURL: uri,
  };
  await auth().currentUser?.updateProfile(userInfo);
};
