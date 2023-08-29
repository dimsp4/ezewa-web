import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseWrapper } from '../response/response-wrapper.model';
import { BuildingResponse } from './building/model/building-response.model';

@Injectable({
  providedIn: 'root'
})
export class PagesCustomerService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getAllBuilding(){
    return this.http.get<ResponseWrapper<BuildingResponse>>('/api/buildings')
  }

  
}
