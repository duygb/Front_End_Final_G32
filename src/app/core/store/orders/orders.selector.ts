import { OrdersState } from './orders.state';
import { createFeatureSelector } from '@ngrx/store';
import { createSelector} from '@ngrx/store';
export const feature_orders = createFeatureSelector<OrdersState>("feature_orders");
export const pendingOrdersSelection = createSelector(feature_orders, (state) => state.pendingOrders)
