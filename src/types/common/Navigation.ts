import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type NoParams = undefined;

export enum Route {
  SignIn = 'SignIn',
  UserProfile = 'UserProfile',
  Chat = 'Chat',
  BottomTab = 'BottomTab',
}

export type RootStackParams = {
  [Route.BottomTab]: NoParams;
  [Route.SignIn]: NoParams;
};

export type BottomTabParams = {
  [Route.UserProfile]: NoParams;
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

export type BottomTabkNavigationProp<R extends keyof BottomTabParams> = BottomTabNavigationProp<
  BottomTabParams,
  R
>;
export type BottomTabRouteProp<R extends keyof BottomTabParams> = RouteProp<BottomTabParams, R>;

export interface RootStackScreenBottomTabProps<R extends keyof BottomTabParams> {
  navigation: BottomTabkNavigationProp<R>;
  route: BottomTabkNavigationProp<R>;
}
