import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from "@angular/core";
import { loginReducer } from './store/auth/login.reducer';
import { LoginEffects } from './store/auth/login.effect';
import { ordersReducer } from './store/orders/orders.reducers';
import { couponReducer } from './store/coupon/coupon.reducer';
import { favoriteReducer } from './store/favorite/favorite.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('feature_login', loginReducer),
    StoreModule.forFeature('feature_orders', ordersReducer),
    StoreModule.forFeature('feature_coupon', couponReducer),
    StoreModule.forFeature('feature_favorite', favoriteReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
})
export class CoreModule {}
