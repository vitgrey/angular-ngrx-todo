import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  GET_TODO = '[TODO] Get',
  ADD_TODO = '[TODO] Add',
  DELETE_TODO = '[TODO] Delete',
  EDIT_TODO = '[TODO] Edit'
}

export class GetTodo implements Action {
  readonly type = TodoActionTypes.GET_TODO;
  constructor() { }
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.ADD_TODO;
  constructor(public payload: string) { }
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