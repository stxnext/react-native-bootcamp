import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';

import { SignInScreen, UserProfileScreen } from 'app/screens';
import { selectors } from 'app/store';

import * as Types from './types';

const Stack = createStackNavigator<Types.RootStackParams>();

export const RootStackScreen: React.FC = () => {
  const isLoggedIn = useSelector(selectors.isLoggedIn);

  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? Types.Route.UserProfile : Types.Route.SignIn}>
      {isLoggedIn ? (
        <Stack.Screen name={Types.Route.UserProfile} component={UserProfileScreen} />
      ) : (
        <Stack.Screen name={Types.Route.SignIn} component={SignInScreen} />
      )}
    </Stack.Navigator>
  );
};