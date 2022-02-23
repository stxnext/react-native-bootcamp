import { signIn, signUp } from 'app/services';
import { actions, AppDispatch, AppThunk } from 'app/store';
import * as authActions from 'app/store/actions/auth';
import * as Types from 'app/types';

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
