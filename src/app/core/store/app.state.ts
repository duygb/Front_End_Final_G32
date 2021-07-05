import { LoginState } from './auth/login.state';
import { CouponState } from './coupon/coupon.state';
import { OrdersState } from './orders/orders.state';
export interface AppState {
  feature_login: LoginState;
  feature_orders: OrdersState;
  feature_coupon: CouponState;
}
