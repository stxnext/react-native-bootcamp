import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';

import { SignInScreen } from 'app/screens';
import { selectors } from 'app/store';

import { MainTabScreen } from './MainTabScreen';
import * as Types from './types';

const Stack = createStackNavigator<Types.RootStackParams>();

export const RootStackScreen: React.FC = () => {
  const isLoggedIn = useSelector(selectors.isLoggedIn);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen
            name={Types.Route.MainTab}
            component={MainTabScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      ) : (
        <Stack.Screen name={Types.Route.SignIn} component={SignInScreen} />
      )}
    </Stack.Navigator>
  );
};
