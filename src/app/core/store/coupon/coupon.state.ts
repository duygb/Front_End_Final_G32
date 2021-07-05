import { Coupon } from './../../models/coupon/coupon';
export interface CouponState {
  coupon: Coupon | null;
  mess: string;
}
