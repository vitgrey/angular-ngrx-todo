import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AuthActionTypes, LogIn, LogInSuccess, SignUp, SignUpSuccess } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private router: Router
  ) { }

  @Effect()
  LogIn$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.LOGIN),
      map((action: LogIn) => action.payload),
      switchMap(payload => {
        return this.authService.login(payload.name, payload.password)
          .pipe(
            map((user) => {
              return new LogInSuccess({ token: user.token });
            })
          );
      })
    );

  @Effect({ dispatch: false })
  LogInSuccess$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.LOGIN_SUCCESS),
      tap((user) => {
        localStorage.setItem('token', user.payload.token);
        this.router.navigateByUrl('/');
      })
    );

  @Effect()
  SignUp$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.SIGNUP),
      map((action: SignUp) => action.payload),
      switchMap(payload => {
        return this.authService.registration(
          payload.name,
          payload.surname,
          payload.email,
          payload.phone,
          payload.password)
          .pipe(
            map((user) => {
              return new SignUpSuccess({ token: user.token });
            })
          );
      })
    );

  @Effect({ dispatch: false })
  SignUpSuccess$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.SIGNUP_SUCCESS),
      tap((user) => {
        localStorage.setItem('token', user.payload.token);
        this.router.navigateByUrl('/');
      })
    );

  @Effect({ dispatch: false })
  LogOut$: Observable<any> = this.actions$
    .pipe(
      ofType(AuthActionTypes.LOGOUT),
      tap((user) => {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/log-in');
      })
    );
}

