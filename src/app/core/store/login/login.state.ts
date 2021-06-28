import { User } from './../../models/user.model';
export interface LoginState {
  status: 'idle' | 'loading' | 'loaded' | 'error';
  error?: string;
  user: User | null;
}
