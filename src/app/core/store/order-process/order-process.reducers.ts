import { PendingOrderItem } from 'src/app/core/models/common-models/pendingOrderItem';
import { OrderProcessState } from './order-process.state';
import * as orderProcessActions from './order-process.actions'
import {  OrderProcess } from '../../models/common-models/order-process';
/* Cơ chế: Khi addToCart() được gọi. Update local storage -> update state (init = những gì có trong storage) */

/* getPendingOrders từ local storage */
function getPendingOrderProcess(): OrderProcess[]{
  if(localStorage.getItem('pendingOrderProcess') == null){
    return [];
  }else {
    return JSON.parse(localStorage.getItem('pendingOrderProcess') || '');
  }
}
export const initialState: OrderProcessState = {
  pendingOrderProcess: getPendingOrderProcess(),
  couponValue: '',
  error: '',
};


export function orderProcessReducer(state = initialState, action: orderProcessActions.OrderProcessActions): OrderProcessState{
  switch (action.type) {
    /* khi action dispatch. Vẫn lấy trong localStorage */
    case orderProcessActions.ADD_PRODUCT_INTO_ORDERPROCESS:
      return { ...state, pendingOrderProcess: getPendingOrderProcess() };
    case orderProcessActions.UPDATE_QUANTITY:
      return { ...state, pendingOrderProcess: getPendingOrderProcess() };
    case orderProcessActions.REMOVE_ORDERPROCESS:
      return { ...state, pendingOrderProcess: getPendingOrderProcess() };
    default:
      return state;
  }
};
