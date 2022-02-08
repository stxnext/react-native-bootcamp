import { isEmpty } from 'app/lib';
import {
  EmptyInputError,
  getCurrentUser,
  openImageLibrary,
  signIn,
  signUp,
  singOut,
  updateUserPhoto,
  uploadFile,
} from 'app/services';
import { actions, AppDispatch, AppThunk } from 'app/store';
import * as authActions from 'app/store/actions/auth';
import { FireBaseError, FireBaseUser } from 'app/types/firebase';

export const initializeAuth = (): AppThunk<Promise<void>> => async (dispatch: AppDispatch) => {
  dispatch(actions.initializeAuth());
  try {
    const user: FireBaseUser | null = await getCurrentUser();
    dispatch(user ? authActions.initializeWithUser(user) : authActions.initializeWithOutUser());
  } catch (error) {
    // handle error
  }
};

export const signInUser =
  (username: string, password: string): AppThunk<Promise<void>> =>
  async (dispatch: AppDispatch) => {
    dispatch(actions.signIn());
    try {
      if (!isEmpty(username) && !isEmpty(password)) {
        const user: FireBaseUser = await signIn(username, password);
        dispatch(authActions.signInSuccess(user));
      } else {
        dispatch(authActions.signInFailure(EmptyInputError));
      }
    } catch (error) {
      dispatch(authActions.signInFailure(error as FireBaseError));
    }
  };

export const signUpUser =
  (username: string, password: string): AppThunk<Promise<void>> =>
  async (dispatch: AppDispatch) => {
    dispatch(actions.signUp());
    try {
      if (!isEmpty(username) && !isEmpty(password)) {
        const user: FireBaseUser = await signUp(username, password);
        dispatch(authActions.signUpSuccess(user));
      } else {
        dispatch(authActions.signUpFailure(EmptyInputError));
      }
    } catch (error) {
      dispatch(authActions.signUpFailure(error as FireBaseError));
    }
  };

export const signOutUser = (): AppThunk<Promise<void>> => async (dispatch: AppDispatch) => {
  dispatch(actions.signOut());
  try {
    await singOut();
    dispatch(authActions.signOut());
  } catch (error) {
    // handle error
  }
};

export const updateUserProfile = (): AppThunk<Promise<void>> => async (dispatch: AppDispatch) => {
  dispatch(actions.updateUser());
  try {
    const imgUri: string = await openImageLibrary();
    const uri: string = await uploadFile(imgUri);
    await updateUserPhoto(uri);
    const user: FireBaseUser | null = await getCurrentUser();
    dispatch(user ? authActions.updateUserSuccess(user) : authActions.updateUserFailure());
  } catch (error) {
    dispatch(authActions.updateUserFailure());
  }
};
