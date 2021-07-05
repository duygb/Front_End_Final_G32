import { PendingOrderItem } from 'src/app/core/models/common-models/pendingOrderItem';

export interface OrdersState {
  pendingOrders: PendingOrderItem[];
  couponValue: string;
  error: string;
}
