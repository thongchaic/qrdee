import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/product.service';
import { ToastService } from '../shared/services/toast.service';
import { BehaviorSubject } from 'rxjs';
// import { Product } from './shared/product';
import { IonInfiniteScroll } from '@ionic/angular';
import { CartService } from '../cart/shared/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {

  products = [];
  page = 1;
  $searchTerm = new BehaviorSubject<string>('');
  
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastService: ToastService
  ) {
    this.productService.search(this.$searchTerm, this.page).subscribe(res => {   
      this.products = res.data;
      this.checkProducts(this.products);
      this.page = 1;

      // console.log(this.products);
    });
  }

  ionViewWillEnter() {
    // this.loadProducts();
  }

  checkProducts(products) {
    products.forEach(product => {
      if(this.cartService.checkInCart(product)) {
        product.incart = 1;
      } else {
        product.incart = 0;
      }

      if(product.instock == 0) {
        product.allowAdd = 0;
      } else {
        product.allowAdd = 1;
      }
    });
  }

  search(query) {
    this.$searchTerm.next(query);
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.toastService.showToast(`เพิ่ม ${product.product_th} ลงในตะกร้า`, 'top');
  }

  // loadProducts() {
  //   this.productService.getAll().subscribe(res => this.products = res.data);
  // }

  loadData(infiniteScroll: IonInfiniteScroll) {
    this.page++;
    console.log(this.page);
    this.productService.search(this.$searchTerm, this.page).subscribe(res => {
      if(Object.keys(res).length === 0 && res.constructor === Object) {
        infiniteScroll.disabled = true;
      }
      setTimeout(() => {
        this.products = this.products.concat(res.data);    
        this.checkProducts(this.products);   
        infiniteScroll.complete();

        if(this.page >= res['last_page']) {
          infiniteScroll.disabled = true;
        }
      }, 500);
    });
  }

}
