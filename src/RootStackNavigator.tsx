import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';

import { SignInScreen } from 'app/screens';
import { selectors } from 'app/store';

import { MainTabScreen } from './MainTabScreen';
import * as Types from './types';

const Stack = createStackNavigator<Types.RootStackParams>();

export const RootStackNavigator: React.FC = () => {
  const user = useSelector(selectors.getUser);

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name={Types.Route.MainTab}
          component={MainTabScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen name={Types.Route.SignIn} component={SignInScreen} />
      )}
    </Stack.Navigator>
  );
};
