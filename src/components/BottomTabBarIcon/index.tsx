import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface BottomTabBarIconProps {
  name: string;
  color: string;
  focused: boolean;
  size: number;
}

export const BottomTabBarIcon: React.FC<BottomTabBarIconProps> = ({ focused, color, name, size }) => (
  <Icon size={focused ? size + 5 : size} name={name} color={color} />
);
