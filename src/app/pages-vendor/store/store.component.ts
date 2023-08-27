import { Component } from '@angular/core';
import { Store } from './model/store-response.model';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  constructor(private readonly service: StoreService) {}
  stores: Store[] = [];

  page: number = 0;
  size: number = 5;
  loading: boolean = true;

  ngOnInit(): void {
    this.getAllStore();
  }

  getAllStore(page = this.page, size = this.size) {
    setTimeout(() => {
      this.service.getStores(page, size).subscribe((res) => {
  
        this.stores = res.data;
      });
      this.loading = false;
    }, 2000);
  }
}
