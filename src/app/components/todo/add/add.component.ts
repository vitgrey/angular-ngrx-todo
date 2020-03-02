import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Todo } from 'src/app/models/todo.model';
import { AddTodo } from 'src/app/store/actions/todo.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public user: Todo = new Todo();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  public onSubmit(): any {
    const payload = {
      title: this.user.title,
      subscription: this.user.subscription
    };
    //this.store.dispatch(new AddTodo(payload));
  }


}
