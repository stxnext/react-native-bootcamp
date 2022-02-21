export enum AppAction {
  NewMessages = 'messages/newMessages',
  AuthInitializeStart = 'auth/initialize/start',
  AuthInitializeNoUser = 'auth/initialize/noUser',
  AuthInitializeUser = 'auth/initialize/user',
  AuthUserRequest = 'auth/user/request',
  AuthUserSuccess = 'auth/user/success',
  AuthUserFailure = 'auth/user/failure',
  AuthSignInRequest = 'auth/signIn/request',
  AuthSignInSuccess = 'auth/signIn/success',
  AuthSignInFailure = 'auth/signIn/failure',
  AuthSignUpRequest = 'auth/signUp/request',
  AuthSignUpSuccess = 'auth/signUp/success',
  AuthSignUpFailure = 'auth/signUp/failure',
  AuthErrorRemove = 'auth/error/remove',
  AuthSignOut = 'auth/signOut',
  UserNewDate = 'user/new/date',
}
