import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseWrapper, ResponseWrapperSingle } from 'src/app/response/response-wrapper.model';
import { BuildingResponse } from '../building/model/building-response.model';
import { TransactionResponse } from 'src/app/pages-customer/model/transaction-response.model';
import { Observable } from 'rxjs';
import { CustomerResponse } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private readonly http: HttpClient) { }

  getAllTransaction(){
    return this.http.get<ResponseWrapper<TransactionResponse>>('/api/transactions/vendor')
  }

  getCustomerById(id: string){
    return this.http.get<ResponseWrapperSingle<CustomerResponse>>('/api/customers/' + id)
  }
}
