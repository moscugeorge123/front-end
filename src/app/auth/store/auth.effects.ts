import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import {
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction,
  registerFailureAction,
  registerRequestAction,
  registerSuccessAction,
} from './auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerRequestAction),
      switchMap(({ payload }) =>
        this.authService.register({
          password: payload.password,
          email: payload.email,
          username: payload.username,
        })
      ),
      map(({ username, email }) =>
        registerSuccessAction({ payload: { username, email } })
      ),
      catchError((error) => of(registerFailureAction({ error })))
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequestAction),
      switchMap(({ payload }) =>
        this.authService.login({
          password: payload.password,
          username: payload.username,
        })
      ),
      map((payload) => loginSuccessAction({ payload })),
      catchError((error) => of(loginFailureAction({ error })))
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
