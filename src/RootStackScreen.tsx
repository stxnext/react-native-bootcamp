import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { errorCode } from 'app/services';
import { selectors, actions } from 'app/store';

import * as Types from './types';

const Stack = createNativeStackNavigator<Types.RootStackParams>();

export const RootStackScreen: React.FC = () => {
  // ----- TODO this file's only temporary for testing ------
  const isLoggedIn = useSelector(selectors.isLoggedIn);
  const user = useSelector(selectors.getUser);
  const error = useSelector(selectors.getError);

  useEffect(() => {
    if (error) {
      Alert.alert('Wystąpił bład', errorCode(error));
    }
  });
  const dispatch = useDispatch();

  function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{user?.email}</Text>
        <Button title={'SignOut'} onPress={() => dispatch(actions.signOut())} />
      </View>
    );
  }
  function SignInScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title={'SignIn'}
          onPress={() => dispatch(actions.signIn('wladyslaw.majdanik@gmail.com', 'wtf12321'))}
        />
      </View>
    );
  }

  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? Types.Route.Home : Types.Route.SignIn}>
      {isLoggedIn ? (
        <Stack.Screen name={Types.Route.Home} component={HomeScreen} />
      ) : (
        <Stack.Screen name={Types.Route.SignIn} component={SignInScreen} />
      )}
    </Stack.Navigator>
  );
};
