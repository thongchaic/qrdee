import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  product: any;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll().subscribe(console.log);
  }

}
