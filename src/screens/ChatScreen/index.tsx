import React, { useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { ChatList, InputMessage } from 'app/screens/ChatScreen/components';
import { getMessagesFromFirestore } from 'app/store/thunk';
import * as Types from 'app/types';

export type Props = Types.RootStackScreenProps<Types.Route.Chat>;

const OS = Platform.OS;
const keyboardBehavior = OS === 'ios' ? 'padding' : 'height';
const keyboardVerticalOffset = 80;

export const ChatScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={keyboardBehavior}
        style={styles.container}
        keyboardVerticalOffset={keyboardVerticalOffset + insets.bottom}
      >
        <ChatList />
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
