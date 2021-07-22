import { LoginState } from './auth/login.state';
import { CouponState } from './coupon/coupon.state';
import { FavoriteState } from './favorite/favorite.state';
import { OrderProcessState } from './order-process/order-process.state';
import { OrdersState } from './orders/orders.state';
export interface AppState {
  feature_login: LoginState;
  feature_orders: OrdersState;
  feature_coupon: CouponState;
  feature_favorite: FavoriteState;
  feature_orderProcess: OrderProcessState;
}
