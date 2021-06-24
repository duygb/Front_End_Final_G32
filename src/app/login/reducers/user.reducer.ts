import { User } from "../models/User";
import * as userLogins from '../action/userAction';
export interface UserState {
  entities: Array<User>;
}
const initialState: UserState = {
  entities: [],
};

export function userReducer(
  state = initialState,
  action: userLogins.Actions
): UserState {
    switch (action.type) {
      case userLogins.ActionTypes.CHECK_LOGIN: {
        const user: User = action.payload;
        return {
          entities: [...state.entities, user],
        };
      }
      case userLogins.ActionTypes.LOGOUT: {
        return {
          ...state,
          entities: [],
        };
      }

      default:
        return state;
    }
}