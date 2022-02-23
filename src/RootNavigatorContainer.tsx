import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { RootStackNavigator } from './RootStackNavigator';

export const RootNavigatorContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
