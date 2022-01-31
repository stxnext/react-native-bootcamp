import React from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppContainer = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent" />
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default AppContainer;
