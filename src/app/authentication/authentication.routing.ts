import { Routes } from '@angular/router';

import { AppSideLoginComponent } from './login/login-vendor/login.component';
import { AppSideRegisterComponent } from './register/register-vendor/register.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AppSideLoginComponent,
  },
  {
    path: 'register',
    component: AppSideRegisterComponent,
  },
];
