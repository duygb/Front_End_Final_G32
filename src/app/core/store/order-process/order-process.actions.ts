import { ActionType, createAction } from "@ngrx/store";
import { addProductIntoDetail } from "../add-detail/add-detail.action";

export const ADD_PRODUCT_INTO_ORDERPROCESS = "[ADD] Product into orderprocess"
export const addProductIntoOrderProcess = createAction(ADD_PRODUCT_INTO_ORDERPROCESS);
export const UPDATE_QUANTITY = '[Update] Quantity';
export const updateQuantity = createAction(UPDATE_QUANTITY);
export const REMOVE_ORDERPROCESS = "[REMOVE] orderprocess"
export const removeOrderProcess = createAction(REMOVE_ORDERPROCESS);

export type OrderProcessActions = ActionType<typeof addProductIntoOrderProcess> |  ActionType<typeof updateQuantity> |  ActionType<typeof removeOrderProcess>;
