import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class TransactionInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          const body = event.body;

          // Check if body has a 'transDate' property
          if (body && body.data && body.data.transDate) {
            body.data.transDate = new Date(body.data.transDate); // Convert to Date
          }
        }
        return event;
      })
    );
  }
}
