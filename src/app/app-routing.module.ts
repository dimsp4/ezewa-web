import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { authGuard } from './authentication/auth.guard';
import { customerGuard, vendorGuard } from './authentication/role.guard';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./pages-customer/pages-customer.module').then(
        (m) => m.PagesCustomerModule
      ),
    canActivate: [authGuard, customerGuard],
  },
  {
    path: 'vendor',
    component: FullComponent,
    loadChildren: () =>
      import('./pages-vendor/pages.module').then((m) => m.PagesModule),
    canActivate: [authGuard, vendorGuard],
  },
  // {
  //   path: 'auth',
  //   component: BlankComponent,
  //   loadChildren: () =>
  //     import('./authentication/authentication.module').then(
  //       (m) => m.AuthenticationModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
