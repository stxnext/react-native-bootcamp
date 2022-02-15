import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface BottomTabBarIconProps {
  name: string;
  color: string;
  focused: boolean;
  size: number;
}

export const BottomTabBarIcon: React.FC<BottomTabBarIconProps> = ({ focused, color, name, size }) => {
  return <Icon size={focused ? size + 5 : size} name={name} color={color} />;
};
