import { createAction, ActionType, props } from '@ngrx/store';
import { User } from '../../models/user.model';
export const CHECK_USERNAME = "@CHECK/Username";
export const CHECK_PASSWORD = "@CHECK/Password";
export const CHECK_USERNAME_SUCCESS = "@CHECK/UsernameSuccess";
export const CHECK_PASSWORD_SUCCESS = "@CHECK/PasswordSuccess";
export const CHECK_USERNAME_FAILED = "@CHECK/UsernameFailed";
export const CHECK_PASSWORD_FAILED = "@CHECK/PasswordFailed";
export const GET_USERNAME_EMPTY = "@GET/UsernameEmpty";

export const CHECK_USER_INFO = "@CHECK/UserInf";
export const CHECK_USER_INFO_COMPLETE = "@GET/UserInfComplete";
export const checkUserInf = createAction(CHECK_USER_INFO, props<{user: User | null, mess: string}>())
export const checkUserInfComplete = createAction(CHECK_USER_INFO_COMPLETE)

export const checkUsername = createAction(CHECK_USERNAME, props<{username: string}>());
export const checkPassword = createAction(CHECK_PASSWORD, props<{username: string, password: string}>());
export const checkUsernameSuccess = createAction(CHECK_USERNAME_SUCCESS, props<{username: string}>());
export const checkPasswordSuccess = createAction(CHECK_PASSWORD_SUCCESS, props<User>());
export const checkUsernameFailed = createAction(CHECK_USERNAME_FAILED, props<{mess: string}>());
export const getUsernameEmpty = createAction(GET_USERNAME_EMPTY);
export type UserLoginActions =
  | ActionType<typeof checkUserInf>
  | ActionType<typeof checkUserInfComplete>