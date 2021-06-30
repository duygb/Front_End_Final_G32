import { createAction, ActionType, props } from '@ngrx/store';
import { User } from './../../models/user.model';
export const CHECK_LOGIN = '@LOGIN/CheckLogin'
export const LOGIN_SUCCESS = '@LOGIN/GetSuccess';
export const LOGIN_FAILED = '@LOGIN/GetFailed';

export const checkLogin = createAction(CHECK_LOGIN,props<{username: string, password: string}>());
export const getLoginSuccess = createAction(LOGIN_SUCCESS, props<User>());
export const getLoginFailed = createAction(LOGIN_FAILED, props<{error: string}>());

export type LoginActions =
  | ActionType<typeof checkLogin>
  | ActionType<typeof getLoginSuccess>
  | ActionType<typeof getLoginFailed>; 
