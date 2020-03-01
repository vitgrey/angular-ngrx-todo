import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { SignUp } from './../../store/actions/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: User = new User();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    const payload = {
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email,
      phone: this.user.phone,
      password: this.user.password
    };
    console.log(payload);
    this.store.dispatch(new SignUp(payload));
  }

}
