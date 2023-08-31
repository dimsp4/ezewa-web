import { Routes } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BuildingComponent } from './building/building.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'building',
    component: BuildingComponent,
    loadChildren: () =>
      import('./building/building.module').then((m) => m.BuildingModule),
  },
  {
    path: 'transaction',
    component: TransactionComponent,
    loadChildren: () =>
      import('./transaction/transaction.module').then((m) => m.TransactionModule),
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
