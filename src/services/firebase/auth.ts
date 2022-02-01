import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const signIn: (email: string, password: string) => Promise<FirebaseAuthTypes.User> = async (
  email,
  password,
) =>
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => user.user)
    .catch((error) => {
      throw error;
    });

export const signUp: (email: string, password: string) => Promise<FirebaseAuthTypes.User> = async (
  email,
  password,
) =>
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => user.user)
    .catch((error) => {
      throw error;
    });

export const singOut: () => void = () => auth().signOut();

export const getCurrentUser: () => FirebaseAuthTypes.User | null = () => auth().currentUser;
