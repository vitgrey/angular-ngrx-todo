import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AuthActionTypes, LogIn, LogInSuccess, SignUp, SignUpSuccess } from '../actions/auth.actions';
import { TodoService } from 'src/app/services/todo.service';
import { TodoActionTypes, GetTodo } from '../actions/todo.action';

@Injectable()
export class TodoEffects {

  constructor(
    private todoService: TodoService,
    private router: Router,
    private actions$: Actions
  ) { }

  @Effect()
  GetAllTodos$: Observable<any> = this.actions$
    .pipe(
      ofType(TodoActionTypes.GET_TODO),
      map((action: GetTodo) => {}),
      switchMap(() => {
        return this.todoService.getAllTodos()
      })
      )

}
