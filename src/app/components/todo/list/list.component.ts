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

  public todos: Todo[] = []

  constructor(
    private router: Router,
    private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(
      (data) => this.todos.push(data)
    )
    console.log(this.todos)
  }
}

