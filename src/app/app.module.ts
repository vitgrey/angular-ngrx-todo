import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthEffects } from './store/effects/auth.effects';
import { reducer } from './store/reducers/auth.reducer';
import { httpInterceptorProviders } from './interceptors';
import { ListComponent } from './components/todo/list/list.component';
import { InterceptrorService } from './interceptors/apikey.interceptor';
import { TodoEffects } from './store/effects/todo.effects';
import { ChangeListComponent } from './components/todo/change-list/change-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    LogInComponent,
    NavigationComponent,
    ListComponent,
    ChangeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    EffectsModule.forRoot([AuthEffects]),
    EffectsModule.forRoot([TodoEffects]),
    StoreModule.forRoot(reducer, {}),
  ],
  providers: [
    httpInterceptorProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptrorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
