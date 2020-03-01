import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public login(name: string, password: string): Observable<any> {
    return this.http.post<User>(`${environment.apiUrl}/login`, { name, password });
  }

  public registration(name: string, surname: string, email: string, phone: number, password: string): Observable<any> {
    return this.http.post<User>(`${environment.apiUrl}/registration`, { name, surname, email, phone, password });
  }

}
