import {
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
import * as Types from 'app/types';

export const initializeAuth = (): AppThunk<Promise<void>> => async (dispatch: AppDispatch) => {
  dispatch(actions.initializeAuth());
  const user: Types.FirebaseUser | null = await getCurrentUser();
  dispatch(user ? authActions.initializeWithUser(user) : authActions.initializeWithoutUser());
};

export const signInUser =
  (username: string, password: string): AppThunk<Promise<void>> =>
  async (dispatch: AppDispatch) => {
    dispatch(actions.signIn());
    try {
      const user: Types.FirebaseUser = await signIn(username, password);
      dispatch(authActions.signInSuccess(user));
    } catch (error) {
      dispatch(authActions.signInFailure(error as Types.FirebaseError));
    }
  };

export const signUpUser =
  (username: string, password: string): AppThunk<Promise<void>> =>
  async (dispatch: AppDispatch) => {
    dispatch(actions.signUp());
    try {
      const user: Types.FirebaseUser = await signUp(username, password);
      dispatch(authActions.signUpSuccess(user));
    } catch (error) {
      dispatch(authActions.signUpFailure(error as Types.FirebaseError));
    }
  };

export const signOutUser = (): AppThunk<Promise<void>> => async (dispatch: AppDispatch) => {
  dispatch(actions.signOut());
  await singOut();
  dispatch(authActions.signOut());
};

export const updateUserProfile = (): AppThunk<Promise<void>> => async (dispatch: AppDispatch) => {
  dispatch(actions.updateUser());
  try {
    const imgUri: string = await openImageLibrary();
    const uri: string = await uploadFile(imgUri);
    await updateUserPhoto(uri);
    const user: Types.FirebaseUser | null = await getCurrentUser();
    dispatch(user ? authActions.updateUserSuccess(user) : authActions.updateUserFailure());
  } catch (error) {
    dispatch(authActions.updateUserFailure());
  }
};
