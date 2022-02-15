import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { UserPhoto } from 'app/components/UserPhoto';
import { UserButton } from 'app/screens/UserProfileScreen/components';
import { selectors } from 'app/store';
import { signOutUser, updateUserProfile } from 'app/store/thunk';
import { defaultTheme } from 'app/theme/default';
import * as Types from 'app/types';

export type Props = Types.RootStackScreenProps<Types.Route.SignIn>;

export const UserProfileScreen: React.FC<Props> = ({ navigation }) => {
  const user = useSelector(selectors.getUser);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <UserPhoto imageURL={user?.photoURL} />
      <Text style={styles.text}>{user?.email}</Text>
      <UserButton title="changePhoto" action={() => dispatch(updateUserProfile())} />
      <UserButton title="SignOut" action={() => dispatch(signOutUser())} />
      <UserButton title="Chat" action={() => navigation.navigate(Types.Route.Chat)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: defaultTheme.grayscale09,
    margin: 10,
    fontSize: 20,
    padding: 5,
  },
});
