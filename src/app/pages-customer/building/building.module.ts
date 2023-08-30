import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AllComponent } from './all/all.component';
import { PriceFormatPipe } from 'src/app/shared/pipe/price-format.pipe';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BuildingRoutingModule,
    NgxPaginationModule,
  ]
})
export class BuildingModule { }
