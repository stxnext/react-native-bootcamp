import React, { useRef, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { addMessageToFirestore } from 'app/store/thunk';
import { theme } from 'app/theme';

export const InputMessage: React.FC = () => {
  const messageInput = useRef<TextInput | null>(null);

  const dispatch = useDispatch();

  const [messageText, setMessageText] = useState('');

  const sendMessage = () => {
    if (messageText) {
      dispatch(addMessageToFirestore(messageText));
      setMessageText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={messageInput}
        style={styles.input}
        value={messageText}
        onChangeText={setMessageText}
        onSubmitEditing={sendMessage}
      />
      <Button title="Wyślij" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.grayscale00,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: '100%',
    margin: 4,
    padding: 4,
    borderWidth: 1,
  },
});
