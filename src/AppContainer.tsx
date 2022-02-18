import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigatorContainer } from './RootNavigatorContainer';
import { SaveActiveAppState } from './SaveActiveAppState';
import { AppGate } from './components';

const AppContainer = () => {
  return (
    <SaveActiveAppState>
      <AppGate>
        <SafeAreaProvider>
          <StatusBar backgroundColor="transparent" />
          <RootNavigatorContainer />
        </SafeAreaProvider>
      </AppGate>
    </SaveActiveAppState>
  );
};

export default AppContainer;
