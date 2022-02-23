import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppGate } from 'app/components/AppGate';

import { RootNavigatorContainer } from './RootNavigatorContainer';

const AppContainer = () => {
  return (
    <AppGate>
      <SafeAreaProvider>
        <StatusBar backgroundColor="transparent" />
        <RootNavigatorContainer />
      </SafeAreaProvider>
    </AppGate>
  );
};

export default AppContainer;
