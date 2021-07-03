import { Order } from './../../models/order/order.model';
import { createAction, props, ActionType } from '@ngrx/store';
export const ADD_ORDER = "[ADD] Order"
export const addOrder = createAction('ADD_ORDER', props<{ order: Order }>());
export type OrdersActions = ActionType<typeof addOrder>;
