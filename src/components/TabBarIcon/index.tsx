import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface TabBarIconProps {
  name: string;
  color: string;
  focused: boolean;
  size: number;
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, color, name, size }) => (
  <Icon size={focused ? size + 5 : size} name={name} color={color} />
);
