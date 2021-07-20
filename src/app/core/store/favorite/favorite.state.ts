
import { FavoriteProduct } from '../../models/common-models/favorite';

export interface FavoriteState {
  pendingFavorite: FavoriteProduct[];
  couponValue: string;
  error: string;
}
