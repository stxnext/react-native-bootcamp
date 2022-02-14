import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef } from 'react';
import { Alert, AppState } from 'react-native';
import { Provider } from 'react-redux';

import AppContainer from './AppContainer';
import { store } from './store';

const App = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        (appState.current.match(/active/) && nextAppState === 'inactive') ||
        (appState.current.match(/active/) && nextAppState === 'background')
      ) {
        setAppLastActiveDateHandler();
      }
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        getAppLastActiveDateHandler();
      }
      appState.current = nextAppState;
    });
    return () => {
      subscription.remove();
    };
  }, []);

  const getAppLastActiveDateHandler = async () => {
    try {
      const appLastActiveDate = await AsyncStorage.getItem('@app_last_active_date');
      Alert.alert(('Last time app was active on ' + appLastActiveDate) as string);
    } catch (error) {
      console.log('ASYNC_STORAGE_GET_ITEM_EROR', error);
    }
  };

  const setAppLastActiveDateHandler = async () => {
    try {
      await AsyncStorage.setItem('@app_last_active_date', new Date().toLocaleString());
    } catch (error) {
      console.log('ASYNC_STORAGE_SET_ITEM_EROR', error);
    }
  };

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
