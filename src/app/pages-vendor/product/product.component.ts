import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model/product-request.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private readonly service: ProductService) {}

  products: Product[] = [];

  page: number = 0;
  size: number = 5;
  loading: boolean = true;

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(page = this.page, size = this.size) {
    setTimeout(() => {
      this.service.getProducts(page, size).subscribe((res) => {
        console.log(res);
  
        this.products = res.data;
      });
      this.loading = false;
    }, 2000);
  }
}
