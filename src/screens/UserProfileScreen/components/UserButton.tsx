import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { theme } from 'app/theme';
import { defaultTheme } from 'app/theme/default';

export interface Props {
  title: string;
  action: () => void;
}

export const UserButton: React.FC<Props> = ({ title, action }) => (
  <TouchableOpacity style={styles.button} onPress={action}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 40,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primaryLight,
  },
  text: {
    color: defaultTheme.grayscale09,
  },
});
