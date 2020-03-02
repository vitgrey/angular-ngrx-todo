import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private http: HttpClient) { }

  public getAllTodos(): Observable<any> {
    console.log('service get')
    return this.http.get<any>(`${environment.apiUrl}/todolist`)
  }

}