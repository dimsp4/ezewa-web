import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseWrapper, ResponseWrapperSingle } from '../response/response-wrapper.model';
import { BuildingResponse } from './building/model/building-response.model';
import { TransactionResponse } from './model/transaction-response.model';
import { TransactionRequest } from './model/transaction-request.model';

@Injectable({
  providedIn: 'root',
})
export class PagesCustomerService {
  constructor(private readonly http: HttpClient) {}

  getAllBuilding(q?: string) {
    if (q) {
    return this.http.get<ResponseWrapper<BuildingResponse>>('/api/buildings', {params: {buildingName: q}});
    }
    return this.http.get<ResponseWrapper<BuildingResponse>>('/api/buildings');
  }

  getAllTransactionByProfile() {
    return this.http.get<ResponseWrapper<TransactionResponse>>('/api/transactions/customer');
  }

  getBuildingById(id: string) {
    return this.http.get<ResponseWrapperSingle<BuildingResponse>>(
      `/api/buildings/${id}`
    );
  }

  startTransacation(data: TransactionRequest){
    return this.http.post<ResponseWrapperSingle<TransactionResponse>>('/api/transactions', data)
  }

  getTransactionById(id: string){
    return this.http.get<ResponseWrapperSingle<TransactionResponse>>(`/api/transactions/${id}`)
  }
}
