import { exhaustMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';
import * as userLoginActions from './user-login.action';
import { of, Observable, forkJoin } from 'rxjs';
import { User } from '../../models/user.model';
import { data } from 'jquery';

@Injectable()
export class UserLoginEffects {
 /*  checkUserInf$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userLoginActions.checkUserInf),
      switchMap((action) =>
        this.httpService
          .checkUserInfo(action.user.username, action.user.password)
          .pipe(
            map((user) =>
              userLoginActions.checkUserInfComplete()
            )
          )
      )
    )
  ); */
  /* checkPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userLoginActions.checkPassword),
      exhaustMap((action) =>
        this.httpService
          .checkUsernamePassword(action.username, action.password)
          .pipe(
            map((user) =>
              userLoginActions.checkPasswordSuccess({ user }.user[0])
            )
          )
      )
    )
  ); */

  constructor(
    private actions$: Actions,
    private httpService: MyServerHttpService
  ) {}
}