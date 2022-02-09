import { FirebaseError } from 'app/types/firebase';

const UndefinedError = 'Undefined Error';

export const EmptyInputError: FirebaseError = {
  code: 'auth/empty-input',
  message: 'Email and password must be provided!',
  namespace: '',
  nativeErrorCode: '',
  nativeErrorMessage: '',
  name: '',
  userInfo: { authCredential: null },
};

const ErrorCode = [
  { code: 'auth/invalid-email', message: 'The email address is not valid' },
  { code: 'auth/user-disabled', message: 'User corresponding to the given email has been disabled' },
  { code: 'auth/user-not-found', message: 'There is no user corresponding to the given email' },
  {
    code: 'auth/wrong-password',
    message:
      'The password is invalid for the given email, or the account corresponding to the email does not have a password set',
  },
  {
    code: 'auth/custom-token-mismatch',
    message: 'The custom token is for a different Firebase App',
  },
  {
    code: 'auth/invalid-custom-token',
    message: 'The custom token format is incorrect',
  },
  {
    code: 'auth/invalid-custom-token',
    message: 'The custom token format is incorrect',
  },
  {
    code: 'auth/weak-password',
    message: 'The password is not strong enough',
  },
  {
    code: 'auth/operation-not-allowed',
    message:
      'Email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab',
  },
  {
    code: 'auth/email-already-in-use',
    message: 'There already exists an account with the given email address',
  },
  {
    code: 'auth/empty-input',
    message: 'Email and password must be provided!',
  },
];

export const errorCode: (error: FirebaseError | null) => string | undefined = (
  error: FirebaseError | null,
) => {
  return ErrorCode.find((entry) => entry.code === error?.code)?.message || UndefinedError;
};
