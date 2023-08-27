import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/authentication/model/login.model';
import { ResponseWrapper } from 'src/app/response/response-wrapper.model';
import { Profile } from './model/profile.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private readonly http: HttpClient) { }

  getMyProfile() : Observable<any>{
    return this.http.get<ResponseWrapper<Profile>>('/api/users/me')
  }
}
