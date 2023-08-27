import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { StoreComponent } from './store/store.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'transaction',
    component: TransactionComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
