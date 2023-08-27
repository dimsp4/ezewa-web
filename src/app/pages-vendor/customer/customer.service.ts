import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseWrapper } from 'src/app/response/response-wrapper.model';
import Customer from './model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private readonly http: HttpClient) {}

  getAllCustomer() : Observable<any>{
    return this.http.get<ResponseWrapper<Customer[]>>('/api/customers')
  }
}
