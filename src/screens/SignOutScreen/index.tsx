import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { actions, selectors } from 'app/store';
import * as Types from 'app/types';

export type Props = Types.RootStackScreenProps<Types.Route.SignIn>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 10,
  },
});

export const SignOutScreen: React.FC<Props> = () => {
  const user = useSelector(selectors.getUser);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user?.email}</Text>
      <Button title={'SignOut'} onPress={() => dispatch(actions.signOut())} />
    </View>
  );
};
