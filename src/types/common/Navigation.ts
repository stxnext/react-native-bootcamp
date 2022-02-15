import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type NoParams = undefined;

export enum Route {
  SignIn = 'SignIn',
  UserProfile = 'UserProfile',
  Chat = 'Chat',
}

export type RootStackParams = {
  [Route.UserProfile]: NoParams;
  [Route.SignIn]: NoParams;
  [Route.Chat]: NoParams;
};

export type RootStackNavigationProp<R extends keyof RootStackParams> = StackNavigationProp<
  RootStackParams,
  R
>;
export type RootStackRouteProp<R extends keyof RootStackParams> = RouteProp<RootStackParams, R>;

export interface RootStackScreenProps<R extends keyof RootStackParams> {
  navigation: RootStackNavigationProp<R>;
  route: RootStackRouteProp<R>;
}
