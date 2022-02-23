import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Button } from 'app/components';
import { theme } from 'app/theme';
import * as Types from 'app/types';

export type Props = Types.RootStackScreenProps<Types.Route.SignIn>;

export const SignInScreen: React.FC<Props> = () => {
  const passwordInput = useRef<TextInput | null>(null);
  const [email, onChangeEmail] = useState<string>('');
  const [password, onChangePassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={onChangeEmail}
        keyboardType="email-address"
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={() => {
          passwordInput.current?.focus();
        }}
      />
      <TextInput
        ref={passwordInput}
        style={styles.input}
        placeholder="password"
        value={password}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={onChangePassword}
      />
      <Button onPress={() => null} title="SignIn" />
      <Button onPress={() => null} title="SignUp" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    marginVertical: 4,
    marginHorizontal: 36,
    padding: 16,
    borderWidth: 1,
    color: theme.grayscale09,
  },
});
