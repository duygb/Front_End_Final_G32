import { EUserActions, UserActions } from "./user.action";
import { IUserLoginState, IUserState } from "./user.states";

const string = 'Tại đây,dữ liệu sẽ được xử lý trước khi được "Đẩy" vào store'
const initLoginState: IUserLoginState = {
  loading: false,
  success: false,
  fail: false,
  username: '',
};
const initUserState: IUserState = {
    login: initLoginState
};
export function userReducer(state = initUserState, action: UserActions): IUserState {
    switch (action.type) {
        case EUserActions.LOGIN:
            return {
              ...state,
              login: { ...initLoginState, loading: true },
            };
        case EUserActions.LOGIN_SUCCESS:
            return {
                ...state,
                login: { ...state.login, loading: false, success: true, username: action.payload  }
            };
        case EUserActions.LOGIN_FAIL:
            return {
                ...state,
                login: { ...state.login, loading: false, fail: true }
            };
        default:
            return state;
    }
}