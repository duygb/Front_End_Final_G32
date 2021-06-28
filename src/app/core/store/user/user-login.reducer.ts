import { UserLoginState } from './user-login.state';
import * as userLoginActions from './user-login.action';
const initialState: UserLoginState = {
    status: 'idle',
    mess: '',
    user: null
}
export function userLoginReducer(state: UserLoginState = initialState, action: userLoginActions.UserLoginActions): UserLoginState{
    switch (action.type) {
      case userLoginActions.CHECK_USERNAME:
        return {
          ...state,
          status: 'check username',
          user: {
            username: action.username,
            password: '',
            thumbnail: '',
            fullName: '',
          },
        };
    case userLoginActions.CHECK_USERNAME_SUCCESS:
        return { ...state, status: 'check username success', user: action.user};
      default:
        return state;
    }
}