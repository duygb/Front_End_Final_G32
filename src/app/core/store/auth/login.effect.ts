import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import * as loginActions from './login.action'
import { MyServerHttpService } from 'src/app/Services/my-server-http-service.service';

@Injectable()
export class LoginEffects {
  /* loadLoginPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.getPosts),
      mergeMap(() => this.postService.get('posts')),
      map((posts) => postActions.getPostsSuccess({ posts })),
      catchError((error) => of(postActions.getPostsFailed({ error })))
    )
  ); */
  constructor(
    private actions$: Actions,
    private httpService: MyServerHttpService
  ) {}
}