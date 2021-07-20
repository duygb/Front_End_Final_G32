import { FavoriteState } from './favorite.state';
import { createFeatureSelector } from '@ngrx/store';
import { createSelector} from '@ngrx/store';
export const feature_favorite = createFeatureSelector<FavoriteState>("feature_favorite");
export const pendingFavoriteSelection = createSelector(feature_favorite, (state) => state.pendingFavorite)
