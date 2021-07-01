import { UserLoginState } from './user-login.state';
import * as userLoginActions from './user-login.action';
import { createReducer } from '@ngrx/store';
const initialState: UserLoginState = {
    status: 'idle',
    mess: '',
    user: null
}
export function userLoginReducer(state: UserLoginState = initialState, action: userLoginActions.UserLoginActions): UserLoginState{
  switch (action.type) {
    case userLoginActions.CHECK_USER_INFO:
      return {
        ...state,
        status: 'checked',
        mess: action.mess,
        user: action.user,
      };
    default:
      return state;
  }
  console.log(initialState);
}