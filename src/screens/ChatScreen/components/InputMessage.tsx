import React, { useRef, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { addMessageToFirestore } from 'app/store/thunk';
import { defaultTheme } from 'app/theme/default';

export const InputMessage: React.FC = () => {
  const messageInput = useRef<TextInput | null>(null);

  const dispatch = useDispatch();

  const [messageText, setMessageText] = useState('');

  const onPress = () => {
    if (messageText) {
      dispatch(addMessageToFirestore(messageText));
      messageInput.current?.clear();
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
        onSubmitEditing={onPress}
      />
      <Button title="Wyślij" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTheme.grayscale00,
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
