import { CouponState } from './coupon.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const feature_coupon = createFeatureSelector<CouponState>("feature_coupon");
export const coupon_Selection = createSelector(feature_coupon, (state) => state.coupon);
