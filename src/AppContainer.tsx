import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './RootNavigator';
import { AppGate } from './components';

const AppContainer = () => {
  return (
    <AppGate>
      <SafeAreaProvider>
        <StatusBar backgroundColor="transparent" />
        <RootNavigator />
      </SafeAreaProvider>
    </AppGate>
  );
};

export default AppContainer;
