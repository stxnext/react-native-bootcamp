import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { theme } from 'app/theme';

interface Props {
  action: () => void;
  title: string;
}

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
});

export const LogInButton: React.FC<Props> = ({ action, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
