import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import createDebugger from 'redux-flipper';
import thunk, { ThunkAction } from 'redux-thunk';

import * as actions from './actions';
import { authReducer, firestoreReducer } from './reducers';
import * as selectors from './selectors';

const middlewares: Middleware[] = [thunk];

if (__DEV__) {
  middlewares.push(createDebugger());
}

const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: __DEV__,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export { store, actions, selectors };
