import { Coupon } from './../../models/coupon/coupon';
import { CouponState } from './coupon.state';
import * as couponActions from './coupon.actions'
export const initialState: CouponState = {
  coupon: null,
  mess: '',
};
export function couponReducer(state = initialState, action: couponActions.CouponActions){
  switch (action.type) {
    case couponActions.CHECK_COUPON:
      return {...state, coupon: action.coupon, mess: action.mess}

    default:
      return state;
  }
}
