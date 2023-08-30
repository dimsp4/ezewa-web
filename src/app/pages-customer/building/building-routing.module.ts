import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingComponent } from './building.component';
import { AllComponent } from './all/all.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'all',
    component: AllComponent,
  },
  {
    path: ':id',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildingRoutingModule {}
