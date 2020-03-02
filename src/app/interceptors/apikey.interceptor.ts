import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { paths } from './paths';

@Injectable({
  providedIn: 'root'
})
export class InterceptrorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes(paths.header)) {
      return next.handle(req);
    }
    console.log("header interceptor")
    req = req.clone({
      setHeaders: {
        "x-apikey": "eyJhbGciOiJIUzI1NiJ9.dW5kZWZpbmVkX3VuZGVmaW5lZA.Opl9O81tN2X8IPGup1DAvesLuU9UVF1shaFA8Yvcr_s"
      }
    });
    return next.handle(req);
  }
}
