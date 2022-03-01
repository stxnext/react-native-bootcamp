import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import createDebugger from 'redux-flipper';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import thunk, { ThunkAction } from 'redux-thunk';

import { authReducer, messagesReducer, userReducer, UserState } from 'app/store/reducers';

import * as actions from './actions';
import * as selectors from './selectors';

const middlewares: Middleware[] = [thunk];

if (__DEV__) {
  middlewares.push(createDebugger());
}

const userPersistConfig: PersistConfig<UserState> = {
  key: 'user',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  auth: authReducer,
  messsages: messagesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: __DEV__,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export { store, persistor, actions, selectors };
