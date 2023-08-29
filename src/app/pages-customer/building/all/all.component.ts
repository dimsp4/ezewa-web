import { Component, OnInit } from '@angular/core';
import { PagesCustomerService } from '../../pages-customer.service';
import { BuildingResponse } from '../model/building-response.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit{
  
  constructor(private readonly service: PagesCustomerService){}
  building: BuildingResponse[] = []

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.service.getAllBuilding().subscribe({
      next: res => {
        this.building = res.data
      }
    })
  }
}
