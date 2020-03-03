import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-change-list',
  templateUrl: './change-list.component.html',
  styleUrls: ['./change-list.component.scss']
})
export class ChangeListComponent implements OnInit {

  public user: Todo = new Todo();
  public mode: string;
  public todoId: string;
  public todo;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.todoId = params.id;
      this.todo = params.todo;
      if (this.todoId) {
        this.todoService.editTodo(this.todoId, this.todo)
        this.mode = 'Edit';
      }
      else {
        this.mode = 'Add'
      }
    })
  }

}
