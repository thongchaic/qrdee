import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
// import { Product } from '../shared/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent {

  product: any;
  url = environment.url;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.loadProduct();
  }

  loadProduct() {
    this.productService.get(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.product = data;
      console.log( data);
    });
  }
}
