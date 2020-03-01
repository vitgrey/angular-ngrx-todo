import { Injectable } from '@angular/core';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { Store, select } from '@ngrx/store';
import { ToDo } from '../models/todo.model';
import { todoReducers } from '../store/reducers/todo.reducer';
import { TodoState } from '../store/app.states';
import { DeleteTodo, AddTodo, EditTodo } from '../store/actions/todo.action';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private allTodos;
  private todoById;

  constructor(private store: Store<TodoState>) {
    this.allTodos = createSelector(todoReducers.selectAll, (entities) => {
      return entities;
    });

    this.todoById = createSelector(todoReducers.selectEntities,
      (entities: Dictionary<ToDo>, props: { id: number }) => {
        return entities[props.id];
      });
  }

  public add(data: ToDo) {
    data.id = new Date().getTime();
    this.store.dispatch(new AddTodo(data));
  }

  public list() {
    return this.store.pipe(select(this.allTodos));
  }

  public remove(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  }

  public getDetail(id: number) {
    return this.store.pipe(select(this.todoById, { id: id }));
  }

  public edit(id: number, changes: ToDo) {
    this.store.dispatch(new EditTodo(id, changes));
  }
}
