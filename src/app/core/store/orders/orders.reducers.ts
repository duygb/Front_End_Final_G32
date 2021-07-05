import { PendingOrderItem } from 'src/app/core/models/common-models/pendingOrderItem';
import { OrdersState } from "./orders.state";
import * as ordersActions from './orders.actions'
/* Cơ chế: Khi addToCart() được gọi. Update local storage -> update state (init = những gì có trong storage) */

/* getPendingOrders từ local storage */
function getPendingOrders(): PendingOrderItem[]{
  if(localStorage.getItem('pendingOrders') == null){
    return [];
  }else {
    return JSON.parse(localStorage.getItem('pendingOrders') || '');
  }
}
export const initialState: OrdersState = {
  pendingOrders: getPendingOrders(),
  couponValue: '',
  error: '',
};


export function ordersReducer(state = initialState, action: ordersActions.OrdersActions): OrdersState{
  switch (action.type) {
    /* khi action dispatch. Vẫn lấy trong localStorage */
    case ordersActions.ADD_PRODUCT_INTO_ORDER:
      return { ...state, pendingOrders: getPendingOrders() };
    case ordersActions.UPDATE_QUANTITY:
      return { ...state, pendingOrders: getPendingOrders() };
    default:
      return state;
  }
};
