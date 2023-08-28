import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BuildingInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("MULTIPART INTERCEPTOR");
    
    // Jika permintaan menggunakan FormData, ubah Content-Type menjadi multipart/form-data
    if (req.body instanceof FormData) {
      // Buat batas (boundary) secara acak
      const boundary = '------------------------' + Math.random().toString(36).substring(2);

      // Atur header Content-Type dengan jenis konten dan batas yang benar
      const modifiedHeaders = req.headers.set('Content-Type', `multipart/form-data; boundary=${boundary}`);

      // Klon permintaan dengan header yang telah dimodifikasi
      const modifiedReq = req.clone({
        headers: modifiedHeaders,
      });

      return next.handle(modifiedReq);
    }

    // Jika bukan FormData, biarkan permintaan tetap seperti aslinya
    return next.handle(req);
  }
}
