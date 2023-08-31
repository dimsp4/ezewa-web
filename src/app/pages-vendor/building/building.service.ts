import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuildingModel } from './model/building.model';
import { ResponseWrapper } from 'src/app/response/response-wrapper.model';
import { BuildingResponse } from './model/building-response.model';
import { BuildingRequest, BuildingUpdateRequest } from './model/building-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  constructor(private readonly http: HttpClient) { }

  addBuilding(buildingData: BuildingRequest): Observable<ResponseWrapper<BuildingResponse>> {
    const formData = new FormData();

    let building = buildingData.building
    let imagesBuilding = buildingData.images
    formData.append("building", JSON.stringify(building));
    
    for (let i = 0; i < imagesBuilding.length; i++) {
      formData.append(`images`, imagesBuilding[i]);
    }
  
    return this.http.post<ResponseWrapper<BuildingResponse>>('/api/buildings', formData);
  }

  updateBuilding(buildingData: BuildingUpdateRequest): Observable<ResponseWrapper<BuildingResponse>> {
    const formData = new FormData();

    let building = buildingData.building
    let imagesBuilding = buildingData.images

    if (imagesBuilding.length > 0) {
      formData.append("building", JSON.stringify(building));
  
      for (let i = 0; i < imagesBuilding.length; i++) {
        formData.append("images", imagesBuilding[i]);
      }
    } else {
      formData.append("building", JSON.stringify(building));
    }
  
    return this.http.put<ResponseWrapper<BuildingResponse>>('/api/buildings', formData);
  }
  

  getAllBuilding(){
    return this.http.get<ResponseWrapper<BuildingResponse>>('/api/buildings/by-token')
  }

  deleteBuildingImage(id: string){
    return this.http.delete('/api/buildings/image/' + id)
  }
}
