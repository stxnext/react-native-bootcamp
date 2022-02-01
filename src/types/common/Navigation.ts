type NoParams = undefined;

export enum Route {
  SignIn = 'SignIn',
  Home = 'Home',
}

export type RootStackParams = {
  [Route.Home]: NoParams;
  [Route.SignIn]: NoParams;
};
