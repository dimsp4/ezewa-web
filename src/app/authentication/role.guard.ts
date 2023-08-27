import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

export const vendorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  
  if (sessionStorage.getItem('role') === "ROLE_VENDOR") {
    return true;
  } else {
    router.navigateByUrl('')
    return false
  }
};

export const customerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if (sessionStorage.getItem('role') === "ROLE_CUSTOMER") {
    return true;
  } else {
    router.navigateByUrl('')
    return false
  }
};