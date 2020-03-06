import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { SignUp } from './../../store/actions/auth.actions';
import { UserFormRegister } from 'src/app/forms/register.form';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private model: User;
  public form: UserFormRegister;

  constructor(private store: Store<AppState>) {
    this.model = new User();
    this.form = new UserFormRegister(this.model);
  }

  ngOnInit(): void {
  }

  public get formGetter(): any {
    return this.form.formGroup.controls;
  }

  public onSubmit(): void {
    const payload = {
      name: this.formGetter.name.value,
      surname: this.formGetter.surname.value,
      email: this.formGetter.email.value,
      phone: this.formGetter.phone.value,
      password: this.formGetter.password.value
    };
    this.store.dispatch(new SignUp(payload));
  }

}
