import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRequest } from './model/user-request.model';
import { UserResponseWrapper } from './model/user-response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient, private readonly router: Router) { }

  public login(data: UserRequest): Observable<any>{
    console.log(data);
    
    return this.http.post<UserResponseWrapper>('/api/auth/login', data)
  }

  public registerCustomer(data: UserRequest): Observable<any>{
    return this.http.post<UserResponseWrapper>('/api/auth/register', data)
  }

  public registerVendor(data: UserRequest): Observable<any>{
    return this.http.post<UserResponseWrapper>('/api/auth/register-vendor', data)
  }

  public logout(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('email')
    this.router.navigateByUrl('landing')
  }
}
