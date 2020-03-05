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

  public query: string = '';
  public todos: Todo[] = [];

  constructor(
    private router: Router,
    private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getAllTodos()
      .subscribe(
        (data: Todo[]) => this.todos = data
      );
  }

  public oneTodo(title: string, description: string): void {
    this.router.navigate(['/one'], { queryParams: { title, description } });
  }

  public addTodo(): void {
    this.router.navigate(['/add']);
  }

  public editTodo(id): void {
    this.router.navigate(['/change'], { queryParams: { id } });
  }

  public deleteTodo(id): void {
    this.todoService.deleteTodo(id)
      .subscribe(
        (error) => console.log(error)
      );
    this.todoService.getAllTodos()
      .subscribe(
        (data: Todo[]) => this.todos = data
      );
  }
}

