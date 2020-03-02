import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { AddTodo, EditTodo } from 'src/app/store/actions/todo.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public user: Todo = new Todo();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  public onSubmit(): any {
    const payload = {
      title: this.user.title,
      subscription: this.user.subscription
    };
    //this.store.dispatch(new EditTodo(id, payload));
  }

}
