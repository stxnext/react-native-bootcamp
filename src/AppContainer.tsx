import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SignInScreen } from 'app/screens';

import { AppGate } from './components';

const AppContainer = () => {
  return (
    <AppGate>
      <SafeAreaProvider>
        <StatusBar backgroundColor="transparent" />
        <SignInScreen />
      </SafeAreaProvider>
    </AppGate>
  );
};

export default AppContainer;
