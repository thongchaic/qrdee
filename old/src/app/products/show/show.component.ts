import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product';
import { environment } from 'src/environments/environment';
// import { CartService } from '../../cart/shared/cart.service';
// import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent {

  product: Product;
  url = environment.url;

  constructor(
    private productService: ProductService,
    // private cartService: CartService,
    // private toastService: ToastService,
    private route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.loadProduct();
  }

  // addToCart(product) {
  //   this.cartService.addToCart(product);
  //   this.toastService.showToast(`เพิ่ม ${product.product_th} ลงในตะกร้า`, 'top');
  // }

  loadProduct() {
    this.productService.get(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.product = data;
      // this.checkProducts(this.product);
    });
  }

  // checkProducts(product) {
  //   if(this.cartService.checkInCart(product)) {
  //     product.incart = 1;
  //   } else {
  //     product.incart = 0;
  //   }

  //   if(product.instock == 0) {
  //     product.allowAdd = 0;
  //   } else {
  //     product.allowAdd = 1;
  //   }
  // }

}
