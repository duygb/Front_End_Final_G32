import { User } from "../../models/user.model";

export interface UserLoginState {
  status:
    | 'idle'
    | 'checking'
    | 'checked'
  mess: string;
  user: User | null;
}