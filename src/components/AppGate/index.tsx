import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { selectors } from 'app/store';
import { theme } from 'app/theme';

export const AppGate: React.FC = ({ children }) => {
  const isLoading = useSelector(selectors.isLoading);

  return (
    <>
      <Modal animationType="fade" transparent visible={isLoading}>
        <View style={styles.modal}>
          <ActivityIndicator size="large" />
        </View>
      </Modal>
      {children}
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.transparentGray,
  },
});
