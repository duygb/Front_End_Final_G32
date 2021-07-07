import { createAction, ActionType, props } from '@ngrx/store';
import { Coupon } from '../../models/coupon/coupon';
export const CHECK_COUPON = "[CHECK] Coupon";
export const checkCoupon = createAction(
  CHECK_COUPON,
  props<{ coupon: Coupon; mess: string }>()
);
export type CouponActions = ActionType<typeof checkCoupon>;
