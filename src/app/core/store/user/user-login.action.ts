import { createAction, ActionType, props } from '@ngrx/store';
import { User } from '../../models/user.model';
export const CHECK_USERNAME = "@CHECK/Username";
export const CHECK_USERNAME_SUCCESS = "@CHECK/UsernameExist";
export const CHECK_USERNAME_FAILED = "@CHECK/UsernameNotExist";
export const checkUsername = createAction(CHECK_USERNAME, props<{username: string}>());
export const checkPassword = createAction(CHECK_USERNAME, props<{username: string, password: string}>());
export const checkUsernameSuccess = createAction(CHECK_USERNAME_SUCCESS, props<{user: User}>());
export const checkUsernameFailed = createAction(CHECK_USERNAME_FAILED, props<{mess: string}>());
export type UserLoginActions =
  | ActionType<typeof checkUsername>
  | ActionType<typeof checkUsernameSuccess>;