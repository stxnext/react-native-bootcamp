import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'app/components/Button';
import { selectors } from 'app/store';
import { signOutUser } from 'app/store/thunk';
import { theme } from 'app/theme';
import * as Types from 'app/types';

export type Props = Types.RootStackScreenProps<Types.Route.SignIn>;

export const UserProfileScreen: React.FC<Props> = () => {
  const user = useSelector(selectors.getUser);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Text style={styles.text}>{user?.email}</Text>
      </View>
      <Button title="SignOut" onPress={() => dispatch(signOutUser())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  photoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.grayscale09,
    margin: 10,
    fontSize: 20,
    padding: 5,
  },
});
