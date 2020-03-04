import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private http: HttpClient) { }

  public getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}/todolist`);
  }

  public addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${environment.apiUrl}/todolist`, newTodo);
  }

  public editTodo(id, editTodo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${environment.apiUrl}/todolist/${id}`, editTodo);
  }

  public deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`${environment.apiUrl}/todolist/${id}`);
  }

}
