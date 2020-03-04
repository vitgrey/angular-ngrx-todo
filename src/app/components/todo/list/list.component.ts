import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public todos: Todo[]

  constructor(
    private router: Router,
    private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getAllTodos()
      .subscribe(
        (data: Todo[]) => this.todos = data
      )
    console.log(JSON.stringify(this.todos))
  }

  public addTodo(): void {
    this.router.navigate(['/add'])
  }

  public editTodo(_id): void {
    console.log(_id)
    this.router.navigate(['/change'], {queryParams: {_id}})
  }

  public deleteTodo(_id): void {
    console.log(_id)
    this.todoService.deleteTodo(_id)
      .subscribe(
        (error) => console.log(error)
      )
    this.todoService.getAllTodos()
      .subscribe(
        (data: Todo[]) => this.todos = data
      )
  }
}

