import React, { useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { MessageList, InputMessage } from 'app/screens/ChatScreen/components';
import { getMessagesFromFirestore } from 'app/store/thunk';
import * as Types from 'app/types';

export type Props = Types.RootStackScreenBottomTabProps<Types.Route.Chat>;

const OS = Platform.OS;
const keyboardBehavior = OS === 'ios' ? 'padding' : 'height';
const keyboardVerticalOffset = 80;

export const ChatScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const unsubscribe = dispatch(getMessagesFromFirestore());
    return () => unsubscribe && unsubscribe();
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={keyboardBehavior}
        style={styles.container}
        keyboardVerticalOffset={keyboardVerticalOffset + insets.bottom}
      >
        <MessageList />
        <InputMessage />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
