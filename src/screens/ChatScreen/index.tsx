import React, { useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';

import { ChatList } from 'app/screens/ChatScreen/components/ChatList';
import { InputMessage } from 'app/screens/ChatScreen/components/InputMessage';
import { getFirestoreCollection } from 'app/store/thunk';
import * as Types from 'app/types';

export type Props = Types.RootStackScreenProps<Types.Route.Chat>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const OS = Platform.OS;
const keyboardBehavior = OS === 'ios' ? 'padding' : 'height';
const keyboardVerticalOffset = OS === 'ios' ? 100 : 80;

export const ChatScreen: React.FC<Props> = ({ route }) => {
  const id = route.params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = dispatch(getFirestoreCollection(id));
    return () => unsubscribe && unsubscribe();
  }, [dispatch, id]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={keyboardBehavior}
        style={styles.container}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <ChatList />
        <InputMessage id={id} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
