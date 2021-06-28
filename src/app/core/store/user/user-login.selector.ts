import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { UserLoginState } from './user-login.state';
export const featureUserLogin = createFeatureSelector<UserLoginState>('feature_userLogin');
export const  userSelection = createSelector(featureUserLogin, state => state.user);
