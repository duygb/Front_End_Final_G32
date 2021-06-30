import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from "@angular/core";
import { loginReducer } from './store/login/login.reducer';
import { LoginEffects } from './store/login/login.effect';
import { UserLoginEffects } from './store/user-login/user-login.effect';
import { userLoginReducer } from './store/user-login/user-login.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('feature_login', loginReducer),
    StoreModule.forFeature('feature_userLogin', userLoginReducer),
    EffectsModule.forFeature([LoginEffects, UserLoginEffects]),
  ],
})
export class CoreModule {}