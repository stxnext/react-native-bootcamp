import { combineReducers, configureStore } from '@reduxjs/toolkit';

import * as actions from './actions';
import { settingsReducer } from './reducers';
import * as selectors from './selectors';

const rootReducer = combineReducers({
  settings: settingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export { store, actions, selectors };
