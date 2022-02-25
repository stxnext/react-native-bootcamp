import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { TabBarIcon } from 'app/components';
import { UserProfileScreen, ChatScreen } from 'app/screens';

import * as Types from './types';

const Tab = createBottomTabNavigator<Types.BottomTabParams>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={Types.Route.UserProfile}>
      <Tab.Screen
        name={Types.Route.UserProfile}
        component={UserProfileScreen}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="user" />,
          title: 'User Profile',
        }}
      />
      <Tab.Screen
        name={Types.Route.Chat}
        component={ChatScreen}
        options={{
          tabBarIcon: (props) => <TabBarIcon {...props} name="comments-o" />,
          title: 'Chat',
        }}
      />
    </Tab.Navigator>
  );
};
