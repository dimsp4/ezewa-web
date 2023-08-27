import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseWrapper } from 'src/app/response/response-wrapper.model';
import { TransactionResponse } from './model/transaction-response.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private readonly http: HttpClient) { }

  getAllTransaction(): Observable<ResponseWrapper<TransactionResponse>>{
    return this.http.get<ResponseWrapper<TransactionResponse>>('/api/transactions')
  }
}
