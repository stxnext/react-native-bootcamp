import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { UserButton } from 'app/screens/UserProfileScreen/components/UserButton';
import { UserPhotoPicture } from 'app/screens/UserProfileScreen/components/UserPhotoPicture';
import { selectors } from 'app/store';
import { signOutUser, updateUserProfile } from 'app/store/thunk';
import { defaultTheme } from 'app/theme/default';
import * as Types from 'app/types';

export type Props = Types.RootStackScreenProps<Types.Route.SignIn>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: defaultTheme.grayscale09,
    margin: 10,
    fontSize: 20,
  },
});

export const UserProfileScreen: React.FC<Props> = () => {
  const user = useSelector(selectors.getUser);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <UserPhotoPicture imageURL={user?.photoURL} />
      <Text style={styles.text}>{user?.email}</Text>
      <UserButton title={'changePhoto'} action={() => dispatch(updateUserProfile())} />
      <UserButton title={'SignOut'} action={() => dispatch(signOutUser())} />
    </View>
  );
};
