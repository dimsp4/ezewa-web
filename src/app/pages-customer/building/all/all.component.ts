import { Component, OnInit } from '@angular/core';
import { PagesCustomerService } from '../../pages-customer.service';
import { BuildingResponse } from '../model/building-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  constructor(
    private readonly service: PagesCustomerService,
    private readonly router: Router
  ) {}

  p = 0;
  building: BuildingResponse[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAllBuilding().subscribe({
      next: (res) => {
        console.log('RES: ', res);

        this.building = res.data;
      },
    });
  }

  navDetail(data: any) {
    this.router.navigate([`customer/building/${data}`]);
  }
}
