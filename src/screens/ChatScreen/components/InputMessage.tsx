import React, { useRef, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { addMessageToFirestoreCollection } from 'app/store/thunk';
import { defaultTheme } from 'app/theme/default';

interface Props {
  id: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTheme.grayscale00,
    margin: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: '100%',
    margin: 5,
    padding: 5,
    borderWidth: 1,
  },
});

export const InputMessage: React.FC<Props> = ({ id }) => {
  const messageInput = useRef<TextInput | null>(null);

  const dispatch = useDispatch();

  const [messageText, setMessageText] = useState('');

  const onPress = () => {
    if (messageText) {
      dispatch(addMessageToFirestoreCollection(id, messageText));
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
