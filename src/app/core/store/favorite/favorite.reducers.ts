
import { FavoriteState } from "./favorite.state";
import * as favoriteActions from './favorite.actions'
import { FavoriteProduct } from '../../models/common-models/favorite';
/* Cơ chế: Khi addToCart() được gọi. Update local storage -> update state (init = những gì có trong storage) */

/* getPendingOrders từ local storage */
function getPendingFavorite(): FavoriteProduct[]{
  if(localStorage.getItem('pendingFavorite') == null){
    return [];
  }else {
    return JSON.parse(localStorage.getItem('pendingFavorite') || '');
  }
}
export const initialState: FavoriteState = {
  pendingFavorite: getPendingFavorite(),
  couponValue: '',
  error: '',
};


export function favoriteReducer(state = initialState, action: favoriteActions.FavoriteActions): FavoriteState{
  switch (action.type) {
    /* khi action dispatch. Vẫn lấy trong localStorage */
    case favoriteActions.ADD_PRODUCT_INTO_FAVORITE:
      return { ...state, pendingFavorite: getPendingFavorite() };
    case favoriteActions.UPDATE_QUANTITY:
      return { ...state, pendingFavorite: getPendingFavorite() };
    case favoriteActions.REMOVE_FAVORITE:
      return { ...state, pendingFavorite: getPendingFavorite() };
    default:
      return state;
  }
};
