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
  public paramId;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.paramId = params._id;
    })
  }

  public editTodo(form) {
    if (form) {
      this.todoService.editTodo(this.paramId, this.user)
      .subscribe(
        (error) => console.log(error)
      )
    }
    this.router.navigate([('/home')])
  }

}
