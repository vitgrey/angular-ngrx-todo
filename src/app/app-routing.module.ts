import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ChangeListComponent } from './components/todo/change-list/change-list.component';
import { AuthGuard } from './guards/auth.guard';
import { ListComponent } from './components/todo/list/list.component';
import { AddListComponent } from './components/todo/add-list/add-list.component';
import { OneComponent } from './components/todo/one/one.component';


const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'change', component: ChangeListComponent, canActivate: [AuthGuard] },
  { path: 'one', component: OneComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddListComponent, canActivate: [AuthGuard] },
  { path: '', component: ListComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
