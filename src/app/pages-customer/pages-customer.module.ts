import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesCustomerRoutingModule } from './pages-customer-routing.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from '../landing/landing.component';
import { MaterialModule } from '../material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CountUpDirective } from '../shared/directive/count-up.directive';
import { BuildingComponent } from './building/building.component';
import { AllComponent } from './building/all/all.component';
import { DetailComponent } from './building/detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProfileInfoComponent} from "../shared/components/profile-info/profile-info.component";


@NgModule({
  declarations: [
    HomeComponent,
    CountUpDirective,
    BuildingComponent,
    AllComponent,
    DetailComponent,
    ProfileInfoComponent
  ],
  imports: [
    CommonModule,
    PagesCustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule
  ]
})
export class PagesCustomerModule { }
