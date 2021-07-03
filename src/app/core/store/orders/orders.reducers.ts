import { OrdersState } from './orders.state';
import * as ordersActions from './orders.actions';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
export const initialState: OrdersState = {
  orders: null,
  error: '',
};

function getOrders(){
  let ordersId: string[] = [];
  for (let index = 0; index < localStorage.length; index++) {
    let key = localStorage.key(index);
    if (key?.slice(0, 5) == 'order') {
      let orderId = key?.slice(5);
      ordersId.push(orderId);
    }
  }

}

export function ordersReducer(state = initialState, action: ordersActions.OrdersActions): OrdersState{
  switch (action.type) {
    case action.ADD_ORDER:
      return {...state, orders: }

    default:
      return state;
  }
};
