import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppGate } from 'app/components/AppGate';

import { RootNavigatorContainer } from './RootNavigatorContainer';
import { SaveActiveAppState } from './SaveActiveAppState';

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
