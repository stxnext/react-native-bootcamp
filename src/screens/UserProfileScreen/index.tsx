import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'app/components/Button';
import { UserPhoto } from 'app/components/UserPhoto';
import { selectors } from 'app/store';
import { signOutUser, updateUserProfile } from 'app/store/thunk';
import { theme } from 'app/theme';
import * as Types from 'app/types';

export type Props = Types.RootStackScreenProps<Types.Route.SignIn>;

export const UserProfileScreen: React.FC<Props> = () => {
  const user = useSelector(selectors.getUser);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <UserPhoto imageURL={user?.photoURL} />
        <Text style={styles.text}>{user?.email}</Text>
      </View>
      <Button title="changePhoto" action={() => dispatch(updateUserProfile())} />
      <Button title="SignOut" action={() => dispatch(signOutUser())} />
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
