import { Component, OnInit } from '@angular/core';
import Customer from './model/customer.model';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor(private readonly service: CustomerService){}

  customers: Customer[] = []
  loading = true

  ngOnInit(): void {
    this.getAllCustomer()
  }

  getAllCustomer(){
    setTimeout(() => {
      this.service.getAllCustomer().subscribe(res => {
        this.customers = res.data
        this.loading = false
      })
    }, 2000);
  }
  
}
