import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuildingModel } from './model/building.model';
import { ResponseWrapper } from 'src/app/response/response-wrapper.model';
import { BuildingResponse } from './model/building-response.model';
import { BuildingRequest } from './model/building-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  constructor(private readonly http: HttpClient) { }

  addBuilding(buildingData: any, images: File[]): Observable<ResponseWrapper<BuildingResponse>> {
    const formData = new FormData();
    formData.append('building', JSON.stringify(buildingData));
    
      formData.append(`images`, images[0]);
  
    return this.http.post<ResponseWrapper<BuildingResponse>>('/api/buildings', formData);
  }
  

  getAllBuilding(){
    return this.http.get<ResponseWrapper<BuildingResponse>>('/api/buildings/by-token')
  }
}
