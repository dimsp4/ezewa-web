import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';
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
          // Swal.fire('Unauthorized', 'Need a f**ckin token.')
        } else if (err.status === 404) {
          // Swal.fire('Api not found', 'Please code wisely.')
        }
        return throwError(() => err)
      })
    );
  }
}
