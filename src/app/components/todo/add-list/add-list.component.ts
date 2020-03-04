import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  public user: Todo = new Todo();

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  public addNewTodo(form): void {
    if (form) {
      this.user.userId = localStorage.getItem('token');
      this.todoService.addTodo(this.user)
        .subscribe(
          (error) => console.log(error)
        )
      console.log(this.user)
      this.router.navigate([('/list')])
    }
  }

  ngOnInit(): void {
  }

}
