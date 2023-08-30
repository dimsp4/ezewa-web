import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { ProfileComponent } from './profile/profile.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoadingOverlayComponent } from '../shared/components/loading-overlay/loading-overlay.component';
import { FullComponent } from '../layouts/full/full.component';
import { TransactionModule } from './transaction/transaction.module';
import { BuildingComponent } from './building/building.component';
import { PurchaseHistoryComponent } from './transaction/purchase-history/purchase-history.component';

@NgModule({
  declarations: [
    ProfileComponent,
    LoadingOverlayComponent,
    TransactionComponent,
    BuildingComponent,
    PurchaseHistoryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    TransactionModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
  ],
  exports: [TablerIconsModule],
})
export class PagesModule {}
