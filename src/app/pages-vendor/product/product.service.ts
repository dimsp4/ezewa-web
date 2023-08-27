import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseWrapper } from 'src/app/response/response-wrapper.model';
import { Observable } from 'rxjs';
import { Product } from './model/product-request.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly http: HttpClient) {}

  getProducts(page = 0, size = 5): Observable<any> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ResponseWrapper<Product[]>>('/api/products', {
      params,
    });
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<ResponseWrapper<Product>>('/api/products/' + id);
  }
}
