import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ToDo } from 'src/app/models/todo.model';
import { ActionsTodo, TodoActionTypes } from './../actions/todo.action'

export interface TodoState extends EntityState<ToDo> { }

export const adapter: EntityAdapter<ToDo> = createEntityAdapter<ToDo>({});

const initialState: ToDo = <ToDo>{};

export const initialTodoState: TodoState = adapter.getInitialState();

export function todoReducers(state = initialTodoState, action: ActionsTodo) {
  switch (action.type) {

    case TodoActionTypes.ADD_TODO: {
      return adapter.addOne(action.payload, state);
    }

    case TodoActionTypes.EDIT_TODO: {
      if (state.entities[action.id] === undefined) {
        return state;
      }
      return adapter.updateOne({
        id: action.id,
        changes: action.changes,
      }, state);
    }

    case TodoActionTypes.DELETE_TODO: {
      return adapter.removeOne(action.id, state);
    }

    default:
      return state;
  }
}

export const getTodoState = createFeatureSelector<TodoState>('todos');

export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors(getTodoState); 