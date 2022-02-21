import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { theme } from 'app/theme';

interface Props {
  action: () => void;
  title: string;
}

export const Button: React.FC<Props> = ({ action, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '50%',
    height: '5%',
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primaryLight,
  },
  text: {
    color: theme.grayscale09,
  },
});
