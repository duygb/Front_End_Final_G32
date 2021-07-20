import { ActionType, createAction } from "@ngrx/store";

export const ADD_PRODUCT_INTO_FAVORITE = "[ADD] Product into favorite"
export const addProductIntoFavorite = createAction(ADD_PRODUCT_INTO_FAVORITE);
export const UPDATE_QUANTITY = '[Update] Quantity';
export const updateQuantity = createAction(UPDATE_QUANTITY);
export const REMOVE_FAVORITE = "[REMOVE] favorite"
export const removeFavorite = createAction(REMOVE_FAVORITE);

export type FavoriteActions = ActionType<typeof addProductIntoFavorite> |  ActionType<typeof updateQuantity> |  ActionType<typeof removeFavorite>;
