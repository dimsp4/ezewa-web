import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthExceptionInterceptor implements HttpInterceptor {

  constructor(private readonly router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log("AUTH EXCEPTION: ", err.status);
        
        if (err.status === 401) {
          this.router.navigateByUrl('')
          alert('Unauthorized')
        } else if (err.status === 404) {
          alert('Not found')
        }
        return throwError(() => err)
      })
    );
  }
}
