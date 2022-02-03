import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { userAvatar } from 'app/assets';
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

  console.log(user?.photoURL);
  return (
    <View style={styles.container}>
      <Image
        source={user?.photoURL ? { uri: user?.photoURL } : userAvatar}
        style={{ height: 100, width: 100 }}
      />
      <Text style={styles.text}>{user?.email}</Text>
      <Button title={'SignOut'} onPress={() => dispatch(actions.signOut())} />
      <Button title={'changePhoto'} onPress={() => dispatch(actions.updateUser())} />
    </View>
  );
};
