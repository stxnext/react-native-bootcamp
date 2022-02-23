import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'app/components';
import { actions, selectors } from 'app/store';
import { signInUser, signUpUser } from 'app/store/thunk';
import { theme } from 'app/theme';
import * as Types from 'app/types';

export type Props = Types.RootStackScreenProps<Types.Route.SignIn>;

export const SignInScreen: React.FC<Props> = () => {
  const passwordInput = useRef<TextInput | null>(null);
  const [email, onChangeEmail] = useState<string>('');
  const [password, onChangePassword] = useState<string>('');
  const dispatch = useDispatch();
  const error = useSelector(selectors.getError);

  useEffect(() => {
    if (error) {
      Alert.alert('Error occurred', error, [
        {
          text: 'OK',
          onPress: () => dispatch(actions.removeError()),
        },
      ]);
    }
  }, [dispatch, error]);

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
      <Button onPress={() => email && password && dispatch(signInUser(email, password))} title="SignIn" />
      <Button onPress={() => email && password && dispatch(signUpUser(email, password))} title="SignUp" />
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
