import { Order } from "../../models/order/order.model";

export interface OrdersState {
  orders: Order[] | null;
  error: string;
}
