import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store/store.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoadingOverlayComponent } from '../shared/components/loading-overlay/loading-overlay.component';
import { FullComponent } from '../layouts/full/full.component';

@NgModule({
  declarations: [
    ProductComponent,
    CustomerComponent,
    ProfileComponent,
    StoreComponent,
    TransactionComponent,
    LoadingOverlayComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
  ],
  exports: [TablerIconsModule],
})
export class PagesModule {}
