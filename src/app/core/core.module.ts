import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from "@angular/core";
import { loginReducer } from './store/login/login.reducer';
import { LoginEffects } from './store/login/login.effect';

@NgModule({
  imports: [
    StoreModule.forFeature('feature_login', loginReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
})
export class CoreModule {}