import { ActionReducerMap } from "@ngrx/store";
import * as fromUser from "./user/user.reducer";
export interface IAppState {
    user: fromUser.IUserState;
}
export const appReducer: ActionReducerMap<IAppState> = {
    user: fromUser.userReducer
};