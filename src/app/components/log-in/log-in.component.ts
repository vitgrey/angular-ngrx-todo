import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.user)
  }

}
