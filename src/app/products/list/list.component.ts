import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ToastService } from '../../shared/services/toast.service';
import { IonInfiniteScroll } from '@ionic/angular';
// import { Product } from '../shared/product';
import { CartService } from 'src/app/cart/shared/cart.service';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  url = environment.url;
  products = [];
  page = 1;
  searchTerm = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastService: ToastService,
    private alertController: AlertController
  ) { }

  ionViewWillEnter() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe(res => {
      this.products = res.data;
      this.checkProducts(this.products);
      this.page = 1;
    });
  }

  deleteProduct(id) {
    this.presentAlertConfirmDelete(id);
  }

  search(query) {
    this.searchTerm = query;
    this.productService.search(query, 1).subscribe(res => {
      this.products = res.data;
      this.checkProducts(this.products);
      this.page = 1;
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.toastService.showToast(`เพิ่ม ${product.product_th} ลงในตะกร้า`, 'top');
  }

  loadData(infiniteScroll: IonInfiniteScroll) {
    this.page++;
    this.productService.search(this.searchTerm, this.page).subscribe(res => {
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

  async presentAlertConfirmDelete(id) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'คุณต้องการลบสินค้าชิ้นนี้ใช่หรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'ตกลง',
          handler: () => {
            this.productService.deleteProduct(id).subscribe(() => {
              this.toastService.showToast(`ลบสินค้าเรียบร้อยแล้ว`, 'top');
              this.loadProducts();
            })
          }
        }
      ]
    });

    await alert.present();
  }

}
