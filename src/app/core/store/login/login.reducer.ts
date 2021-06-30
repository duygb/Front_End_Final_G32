import { LoginState } from './login.state';
import * as loginActions from './login.action'
import { ActivatedRouteSnapshot } from '@angular/router';
const initialState: LoginState = {
    status: 'idle',
    error: '',
    user: null
}

export function loginReducer(state: LoginState = initialState, action: loginActions.LoginActions): LoginState{
    switch (action.type) {
        case loginActions.CHECK_LOGIN_SUCCESS:
            return {...state, status: 'login', user: action.user}
        case loginActions.CHECK_LOGIN_FAILED:
            return {...state, status: 'idle', user: null}
        default:
            return state;
    }
}