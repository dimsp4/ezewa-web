import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseWrapper } from 'src/app/response/response-wrapper.model';
import { Product } from '../product/model/product-request.model';
import { Store } from './model/store-response.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private readonly http: HttpClient) {}

  getStores(page = 0, size = 5): Observable<any> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ResponseWrapper<Store[]>>('/api/stores', {
      params,
    });
  }
}
