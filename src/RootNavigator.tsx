import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { RootStackScreen } from './RootStackScreen';

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
