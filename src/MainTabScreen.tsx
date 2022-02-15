import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { BottomTabBarIcon } from 'app/components';
import { UserProfileScreen, ChatScreen } from 'app/screens';

import * as Types from './types';

const Tab = createBottomTabNavigator<Types.MainTabParams>();

export const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName={Types.Route.UserProfile}>
      <Tab.Screen
        name={Types.Route.UserProfile}
        component={UserProfileScreen}
        options={{
          tabBarIcon: (props) => <BottomTabBarIcon {...props} name="user" />,
          title: 'User Profile',
        }}
      />
      <Tab.Screen
        name={Types.Route.Chat}
        component={ChatScreen}
        options={{
          tabBarIcon: (props) => <BottomTabBarIcon {...props} name="comments-o" />,
          title: 'Chat',
        }}
      />
    </Tab.Navigator>
  );
};
