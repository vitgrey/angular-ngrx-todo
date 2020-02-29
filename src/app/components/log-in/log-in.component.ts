import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { LogIn } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public user: User = new User();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    const payload = {
      name: this.user.name,
      password: this.user.password
    };
    this.store.dispatch( new LogIn(payload))
  }

}
