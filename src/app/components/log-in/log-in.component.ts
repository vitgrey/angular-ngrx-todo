import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { LogIn } from 'src/app/store/actions/auth.actions';
import { UserFormLogin } from 'src/app/forms/login.form';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  private model: User;
  public form: UserFormLogin;

  constructor(private store: Store<AppState>) {
    this.model = new User();
    this.form = new UserFormLogin(this.model);
  }

  ngOnInit(): void {
  }

  public get formGetter(): any {
    return this.form.formGroup.controls;
  }

  public onSubmit(): void {
    const payload = {
      name: this.formGetter.name.value,
      password: this.formGetter.password.value
    };
    this.store.dispatch(new LogIn(payload));
  }

}
