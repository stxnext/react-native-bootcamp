import React from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { selectors } from './store';

const AppContainer = () => {
  const isDarkModeEnabled = useSelector(selectors.isDarkModeEnabled);
  const barStyle = isDarkModeEnabled ? 'light-content' : 'dark-content';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent" translucent barStyle={barStyle} />
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default AppContainer;
