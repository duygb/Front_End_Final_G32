import {createSelector} from '@ngrx/store';
import * as fromUser from './user.reducer';

export interface UserState {
  entities: fromUser.UserState;
}
export const reducer = {
    entities: fromUser.userReducer
}
export const getAppLogin = (state: UserState) => state.entities;
export const getLogin = createSelector(getAppLogin, (state: fromUser.UserState) => {
    return state.entities;
})
