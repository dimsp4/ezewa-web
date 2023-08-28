import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

const routes: Routes = [
  {
    path: 'transaction',
    redirectTo: 'booking-list',
    pathMatch: 'full',
  },
  {
    path: 'booking-list',
    children: [
      {
        path: '',
        component: BookingListComponent
      },
    ],
  },
  {
    path: 'purchase-history',
    children: [
      {
        path: '',
        component: PurchaseHistoryComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
