import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';
import createSagaMiddleware from 'redux-saga';

import * as actions from './actions';
import { authReducer } from './reducers';
import rootSaga from './sagas';
import * as selectors from './selectors';

const sagaMiddleware = createSagaMiddleware({
  onError: (error: Error) => {
    if (__DEV__) {
      console.warn(error);
    }
  },
});

const middlewares: Middleware[] = [sagaMiddleware];

if (__DEV__) {
  middlewares.push(createDebugger());
}

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: __DEV__,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);

export { store, actions, selectors };
