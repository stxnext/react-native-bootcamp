import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';

import * as actions from './actions';
import { settingsReducer } from './reducers';
import * as selectors from './selectors';

const middlewares: Middleware[] = [];

if (__DEV__) {
  middlewares.push(createDebugger());
}

const rootReducer = combineReducers({
  settings: settingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: __DEV__,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export { store, actions, selectors };
