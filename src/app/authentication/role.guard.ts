import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const vendorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (sessionStorage.getItem('role') === 'ROLE_VENDOR') {
    return true;
  } else {
    router.navigateByUrl('');
    return false;
  }
};

export const customerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (sessionStorage.getItem('role') === 'ROLE_CUSTOMER') {
    return true;
  } else {
    router.navigateByUrl('');
    return false;
  }
};
