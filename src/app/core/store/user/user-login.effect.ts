import { props } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import * as userLoginActions from './user-login.action';
import { of } from 'rxjs';
import { User } from '../../models/user.model';
@Injectable()
export class UserLoginEffects {
  loadCheckUsername$ = createEffect(() =>
    this.action$.pipe(
      ofType(userLoginActions.checkUsername),
      mergeMap((userLoginActions) => this.httpService.checkUsername(userLoginActions.username)),
      map((user: User) => userLoginActions.checkUsernameSuccess({user}))
    )
  );

  constructor(
    private action$: Actions,
    private httpService: MyServerHttpService
  ) {}
}