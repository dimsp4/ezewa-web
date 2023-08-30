import { Component, OnInit } from '@angular/core';
import { PagesCustomerService } from '../../pages-customer.service';
import { BuildingResponse } from '../model/building-response.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PagingInfo } from 'src/app/response/response-wrapper.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  constructor(
    private readonly service: PagesCustomerService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    
  }

  query = ''
  p = 0;

  paging: PagingInfo = {
    count: 0,
    totalPages: 0,
    page: 0,
    size: 0,
  };

  building: BuildingResponse[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(val => {
      this.query = val['q']
      this.getAll();
    })
  }

  getAll() {
    this.service.getAllBuilding(this.query).subscribe({
      next: (res) => {
        this.paging = res.paging;
        this.building = res.data;
      },
    });
  }

  navDetail(data: any) {
    this.router.navigate([`customer/building/${data}`]);
  }
}
