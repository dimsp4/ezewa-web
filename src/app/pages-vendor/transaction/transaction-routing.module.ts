import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

const routes: Routes = [
  {
    path: 'transaction',
    redirectTo: 'purchase-history',
    pathMatch: 'full',
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
