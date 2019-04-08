import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/product.service';
import { ToastService } from '../shared/services/toast.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from './shared/product';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products = [];
  page = 1;
  $searchTerm = new BehaviorSubject<string>('');
  
  constructor(
    private productService: ProductService,
    private toastService: ToastService
  ) {
    this.productService.search(this.$searchTerm, this.page).subscribe(res => {   
      this.products = res.data;
      this.page = 1;
    });
  }

  ngOnInit() {
  }

  search(query) {
    this.$searchTerm.next(query);
  }

  addToCart(product) {
    let cartArr = [];
    let allowPush = true;

    product.qty = 1;
    
    if(localStorage.getItem('cart')) cartArr = JSON.parse(localStorage.getItem('cart'));

    for(let i = 0; i < cartArr.length; i++) {
      if(cartArr[i].id === product.id) {
        cartArr[i].qty += 1;
        allowPush = false;
        break;
      }
    }

    if(allowPush) cartArr.push(product);
    localStorage.setItem('cart', JSON.stringify(cartArr));  
    product.instock -= 1;
    this.toastService.showToast(`เพิ่ม ${product.product_th} ลงในตะกร้า`, 'bottom');
    // console.log(JSON.parse(localStorage.getItem('cart')));
  }

  loadData(infiniteScroll: IonInfiniteScroll) {
    this.page++;
    this.productService.search(this.$searchTerm, this.page).subscribe(res => {
      if(Object.keys(res).length === 0 && res.constructor === Object) {
        infiniteScroll.disabled = true;
        return
      }
      setTimeout(() => {
        this.products = this.products.concat(res.data);
        infiniteScroll.complete();     

        if(this.page >= res['last_page']) {
          infiniteScroll.disabled = true;
        }
      }, 500);
    });
  }

}
