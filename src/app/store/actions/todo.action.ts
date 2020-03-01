import { Action } from '@ngrx/store';
import { ToDo } from 'src/app/models/todo.model';

export enum TodoActionTypes {
  ADD_TODO = '[TODO] Add',
  DELETE_TODO = '[TODO] Delete',
  EDIT_TODO = '[TODO] Edit'
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.ADD_TODO;
  constructor(public payload: ToDo) { }
}

export class EditTodo implements Action {
  readonly type = TodoActionTypes.EDIT_TODO;
  constructor(public id: number, public changes: any) { }
}

export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DELETE_TODO;
  constructor(public id: number) { }
}

export type ActionsTodo = | AddTodo | EditTodo | DeleteTodo;