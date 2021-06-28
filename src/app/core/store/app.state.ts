import { UserLoginState } from './user/user-login.state';
import { LoginState } from './login/login.state';
export interface AppState {
  feature_userLogin: UserLoginState;
  feature_login: LoginState;
}