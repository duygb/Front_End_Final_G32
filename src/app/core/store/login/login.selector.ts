import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "./login.state";

export const featureLogin = createFeatureSelector<LoginState>('feature_login');
export const statusSelector = createSelector(featureLogin, state => state.status);
                                               //(Selector, projector)
export const errorMessSelector = createSelector(featureLogin, state => state.error);
export const userSelector = createSelector(featureLogin, (state) => state.user);
export const userUsernameSelector = createSelector(userSelector, (state) => state?.username);