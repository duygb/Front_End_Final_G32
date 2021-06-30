import { User } from './../../models/user.model';
export interface LoginState {
  status: 'idle' | 'login' | 'logout'  
  error?: string;
  user: User | null;
}
