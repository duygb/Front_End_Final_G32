
import { OrderProcess } from '../../models/common-models/order-process';

export interface OrderProcessState {
  pendingOrderProcess: OrderProcess[];
  couponValue: string;
  error: string;
}
