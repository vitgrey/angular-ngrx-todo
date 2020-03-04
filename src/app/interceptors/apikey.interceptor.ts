import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { paths } from './paths';

@Injectable({
  providedIn: 'root'
})
export class ApikeyInterceptror implements HttpInterceptor {

  private key = localStorage.getItem('token');

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.includes(paths.header)) {
      return next.handle(req);
    }

    req = req.clone({
      setHeaders: {
        'x-apikey': this.key
      }
    });

    return next.handle(req);
  }
}
