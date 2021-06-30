import { createAction, ActionType, props } from '@ngrx/store';
import { User } from '../../models/user.model';
export const CHECK_LOGIN_SUCCESS = '@LOGIN/Success';
export const checkLoginSuccess = createAction(CHECK_LOGIN_SUCCESS, props<{user: User}>())
export const CHECK_LOGIN_FAILED = '@LOGIN/Failed';
export const checkLoginFailed = createAction(CHECK_LOGIN_FAILED)

export type LoginActions =
  | ActionType<typeof checkLoginSuccess>
  | ActionType<typeof checkLoginFailed>
