import { LoginState } from './login.state';
import * as loginActions from './login.action'
const initialState: LoginState = {
    status: 'idle',
    error: '',
    user: null
}

export function loginReducer(state: LoginState, action: loginActions.LoginActions): LoginState{
    switch (action.type) {
        case loginActions.CHECK_LOGIN:   
            return {...state, status: 'loading'};
        case loginActions.LOGIN_SUCCESS:
            return { ...state, status: 'idle', user: action.user };
        case loginActions.LOGIN_FAILED:
            return {...state, status: 'error', error: action.error}
        default:
            return state;
    }
}