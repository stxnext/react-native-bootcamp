import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigatorContainer } from './RootNavigatorContainer';

const AppContainer = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent" />
      <RootNavigatorContainer />
    </SafeAreaProvider>
  );
};

export default AppContainer;
