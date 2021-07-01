import { User } from '../../models/user.model';
export interface LoginState {
  user: User | null;
  mess: string;
}
