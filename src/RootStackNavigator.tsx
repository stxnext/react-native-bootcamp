import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { SignInScreen } from 'app/screens';

import * as Types from './types';

const Stack = createStackNavigator<Types.RootStackParams>();

export const RootStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Types.Route.SignIn} component={SignInScreen} />
    </Stack.Navigator>
  );
};
