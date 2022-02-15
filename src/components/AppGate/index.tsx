import React, { useEffect } from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { selectors } from 'app/store';
import { initializeAuth } from 'app/store/thunk';
import { defaultTheme } from 'app/theme/default';

export const AppGate: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.isLoading);

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

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
    backgroundColor: defaultTheme.transparentGray,
  },
});
