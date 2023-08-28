import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { BookingListComponent } from './booking-list/booking-list.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { TransactionComponent } from './transaction.component';


@NgModule({
  declarations: [
    BookingListComponent,
    PurchaseHistoryComponent,
    PurchaseHistoryComponent,
    BookingListComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
