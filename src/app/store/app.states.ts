import * as auth from './reducers/auth.reducer';
import { ToDo } from '../models/todo.model';

export interface TodoState {
  readonly tutorial: ToDo[];
}

export interface AppState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.reducer
};
