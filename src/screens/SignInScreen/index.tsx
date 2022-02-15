import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { LogInButton } from 'app/screens/SignInScreen/components';
import { errorCode } from 'app/services';
import { actions, selectors } from 'app/store';
import { signInUser, signUpUser } from 'app/store/thunk';
import { theme } from 'app/theme';
import * as Types from 'app/types';

export type Props = Types.RootStackScreenProps<Types.Route.SignIn>;

export const SignInScreen: React.FC<Props> = () => {
  const passwordInput = useRef<TextInput | null>(null);
  const error = useSelector(selectors.getError);
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useState<string>('');
  const [password, onChangePassword] = useState<string>('');

  useEffect(() => {
    if (error) {
      Alert.alert('Error occurred', errorCode(error), [
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
        onSubmitEditing={() => {
          passwordInput.current?.focus();
        }}
      />
      <TextInput
        ref={passwordInput}
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={onChangePassword}
        secureTextEntry
      />
      <LogInButton action={() => dispatch(signInUser(email, password))} title="SignIn" />
      <LogInButton action={() => dispatch(signUpUser(email, password))} title="SignUp" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    color: theme.grayscale09,
  },
});
